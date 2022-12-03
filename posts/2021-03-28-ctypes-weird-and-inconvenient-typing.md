---
title: The weird and inconvenient typing of Python's ctypes library
author: Simon Plakolb
subtitle: Schroedingers strict typing explained.
---

This post is the result of two initially separate drafts. As they both circled the typing of Python's *ctypes* library, I chose to merge them.

Many programming languages ship with one or another form of support for interfacing with *C*. In Python you can actually write whole libraries entirely in the *C* programming language. If on the other hand you just want to interface with a *C* library you might want to: ``import ctypes``. It provides you with the ability to import dynamically linked libraries (DLLs) and with implementations of the types you might encounter coming from *C*. You can then access the functions in these libraries and type conversions will be done for you by *ctypes*.

While developing my Haskell - Python interfacing library [Pythas](htts://github.com/pinselimo/Pythas) I used *ctypes* to load compiled Haskell into Python. Naturally, there were some weird things I encountered doing so. Let's start with:

## ctypes weirdly strict typing

When developing in both Python and Haskell you quickly realize just how strict the latter's type checker is. If the type of any function in Haskell doesn't check out it will complain right away.

Python's usually different. You might have had a function call multiplying two strings all along, yet it won't complain unless it touches this very call. Naturally, I expected Haskell to cause the vast majority of type related problems in my endeavour.
Until I faced this weird situation with *ctypes*:

~~~
ctypes.ArgumentError: argument 1: <class 'TypeError'>: expected LP_c_array instance instead of LP_c_array
~~~

Usually Python doesn't support static typing i.e. telling the language which type an expression has. In order to interface with other languages it needs to know these specifics about memory though. So obviously you have to tell *ctypes* what the data it's seeing means. Otherwise, it will always default to 32 bit integers (AFAIK).

But why would it confuse an ``LP_c_array`` with an ``LP_c_array`` ?

Turn's out if you construct a ``ctypes.Structure`` subclass twice, even with the same name and memory layout - these are distinct types to ctypes. And it checks for them!

You can try it out with this snippet:

~~~python
>>> import ctypes
>>> def new_struct(type_a, type_b):
...     class Struct(ctypes.Structure):
...         _fields_ = [("a", type_a), ("b", type_b)]
...     return Struct

>>> StructA, StructB = new_struct(ctypes.c_int, ctypes.c_int), new_struct(ctypes.c_int, ctypes.c_int)
>>> StructA is StructB or StructA == StructB
False
~~~

This is weird behavior especially since it would happily default to just treating the data like an integer. Neither does it hesitate to try and access any memory you point it to nor to interpret it in faulty ways. In pretty much any use case *ctypes* follows *C*'s philosophy of trusting the developer. Then once you try to construct the same memory layout twice it will fail on you.

If you want to reconstruct the error message from above continue the code example with:

~~~python
>>> libc = ctypes.CDLL("libc.so.6")
>>> libc.printf.argtypes = [ctypes.POINTER(StructA)] # For demonstration purposes only
>>> pb = ctypes.pointer(StructB(1,2))
>>> libc.printf(pb) # Call with the wrongly typed instance
ctypes.ArgumentError: argument 1: <class 'TypeError'>: expected LP_Struct instance instead of LP_Struct
~~~

What's even weirder is, you are allowed subclass pointers without facing this issue:

~~~python
>>> PointerA = ctypes.POINTER(ctypes.c_char)
>>> PointerB = ctypes.POINTER(ctypes.c_char)
>>> libc.printf.argtypes = [PointerA] # For demonstration purposes only
>>> a = PointerB(ctypes.c_char(b"a"))
>>> libc.printf(a)
a⏎
~~~

The end of the first story. Next up we have:

## ctypes weirdly inconvenient type conversions

So now that we know we need to tell *ctypes* **exactly** which type it is looking at we should be fine, right? Wrong!

The library is so eager to support us, it starts doing type conversions without being asked. If a C-function has return type ``ctypes.c_wchar_p`` (and probably also ``ctypes.c_char_p`` but Python uses 16bit characters for strings) ctypes will handle the conversion to a Python ``str`` string automatically. Unfortunately it doesn't keep track of the pointer, nor marshal it in any way. So we're 

So we end up with leaking memory unless we go to the lengths of wrapping said string. One of the most important features of data processing are strings however. So they were a must have in the Pythas package.

~~~python
>>> import pythas; import example.example as e
>>> e.strings("abba abba nunada banana")
'bb bb nund bnn'
>>> from time import sleep
>>> sleep(1)
>>> for _ in range(999999):
...     e.strings("abba abba nunada banana")
...
~~~

This example works at the root directory of the [Pythas repository](https://github.com/pinselimo/Pythas). Alternatively create a directory called ``example`` and place an ``Example.hs`` file in it filled with these [file contents](https://github.com/pinselimo/Pythas/blob/master/example/Example.hs). Then install **Pythas** using *pip* and run *python*.

### Memory profiling

Using *Valgrind*'s own *massif* memory profiler I created two graphs showing the issue. In the first graph we'll use the code from above. *Pythas* is designed with this issue in mind. It doesn't actually hand over ``char``-pointers but ``char``-pointer-pointers! Hence, *ctypes* doesn't automatically convert the string and we can dereference the pointer after conversion.

~~~
    MB
3.141^                                                                       #
     |@                                                                      #
     |@::@::::::::@::::::::::::@@:@::@:::::::::::::::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
     |@ :@:: :::::@: : :: ::: :@ :@: @:::: :: ::: :::::::::::::::@::::::@::::#
   0 +----------------------------------------------------------------------->Gi
     0                                                                   123.1
 ~~~


The second graph relies on *ctypes*. It's the same example but using the **testing only** commit [66527b2](https://github.com/pinselimo/Pythas/commit/66527b2470e73df33783bcd5ccaed00db1886241) of *Pythas*.
This version will hand over plain ``char``-pointers making it impossible to get the pointer address after *ctypes*' automatic conversion. You can see the result here:

~~~
    MB
72.41^                                                                       #
     |                                                                    ::@#
     |                                                                 :::::@#
     |                                                            :@::::::::@#
     |                                                         ::::@::::::::@#
     |                                                     ::@:: ::@::::::::@#
     |                                                 ::::::@:: ::@::::::::@#
     |                                              :::: ::::@:: ::@::::::::@#
     |                                           ::::::: ::::@:: ::@::::::::@#
     |                                      :::::::::::: ::::@:: ::@::::::::@#
     |                                   ::::::: ::::::: ::::@:: ::@::::::::@#
     |                                :::::::::: ::::::: ::::@:: ::@::::::::@#
     |                           ::::::: ::::::: ::::::: ::::@:: ::@::::::::@#
     |                       :::::: : :: ::::::: ::::::: ::::@:: ::@::::::::@#
     |                    :::: :::: : :: ::::::: ::::::: ::::@:: ::@::::::::@#
     |                @::::::: :::: : :: ::::::: ::::::: ::::@:: ::@::::::::@#
     |             :::@: ::::: :::: : :: ::::::: ::::::: ::::@:: ::@::::::::@#
     |        ::::::::@: ::::: :::: : :: ::::::: ::::::: ::::@:: ::@::::::::@#
     |    ::::: :: :::@: ::::: :::: : :: ::::::: ::::::: ::::@:: ::@::::::::@#
     |@@::::: : :: :::@: ::::: :::: : :: ::::::: ::::::: ::::@:: ::@::::::::@#
   0 +----------------------------------------------------------------------->Gi
     0                                                                   106.2
~~~

As with any graph in the depths of the internet, take a close look at the y-axis. You can easily sport the memory leakage appearing when directly handing strings from Python via *ctypes* to Haskell and vice versa. The result is a roughly 23 fold increase in memory usage in that very simple test case.

I guess it's safe to say *ctypes* doesn't properly support allocated strings.

## Conclusion

Of course these things are more related to UX, error message philosophy and consistency. Nothing major. Hence, I could provide workarounds for both. I also had to for my *Pythas* package.

+ To prevent type matching errors consider pairing the ``struct`` subclass with it's constructor (if these two aren't one and the same). Do not rely on the function to provide you with the correct type dynamically.
+ To circumvent *ctypes* swallowing your pointer reference wrap ``ctypes.c_wchar_p`` instances in another ``ctypes.POINTER``. This way you can then free both of them from wherever you allocated the space in the first place.

For more fun with *ctypes* refer to the aptly named ["surprises"](https://docs.python.org/3/library/ctypes.html#surprises) paragraph of its very own documentation.

