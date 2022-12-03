---
title: The Pythas story
author: Simon Plakolb
subtitle: A pandemic turned my life upside down and you won't believe what happened next.
---

It's been a year since Corona took over the news and ultimately my whole life. Like for most people, my bored mind went astray and soon I sat in a park trying to compile Haskell code into a shared library, importing it into Python. Things went on and at the end of the first lockdown I put three lines on my home office whiteboard - which should haunt me throughout the pandemic:

~~~haskell
f :: [Int] -> [Int]
>>> f([1,2,3])
[2,4,6]
~~~

No, it's not about a novel or wrongful use case of [left to right composition in Control.Arrow](https://hackage.haskell.org/package/base-4.14.1.0/docs/Control-Arrow.html#v:-62--62--62-). It's an unlawful mixture of Python and Haskell syntax. But it encoded my idea:

> *A function strictly defined in Haskell dynamically used in Python.*

My - obviously too shallow - first research showed no such advances made. I had overlooked [HaPy](https://github.com/ddfisher/HaPy) which I discovered well into the development of Pythas. So I went head first into developing an easy to use Haskell-Python interface and after all at least now you get to choose flavors ;)

## The first steps

I had already successfully imported shared libraries compiled by GHC. The only thing that really bothered me was, how unnecessary tedious it was. You'd have to add all the ``foreign export ccall`` statements in Haskell and then remember to properly define the ``restype`` and ``argtypes`` on Python's *ctypes*. Nothing that couldn't be automated!

For a first prototype I chose to parse stuff and do the code creation from within Python. It's a good prototyping language tbh - quick and dirty! Way too dirty in fact. So the next parser was implemented using Haskell's *Parsec*. There was a clear reason why I didn't go for *Attoparsec* or the like. I wanted *Pythas* to remain as approachable as possible. People tinker with Python because it's easy. So I view the possibility to import Haskell into Python as a stepping stone for those unfamiliar with the deeper Haskell ecosystem. Similarly, dependencies on Python's side are kept minimal.

> Installing GHC or Stack was, is and should remain the hardest thing in setting up *Pythas*.

Getting the trivial types to import was no big obstacle, so quickly I could:

~~~haskell
f :: Int -> Int
>>> f(1)
2
~~~

And in fact a lot more was possible. ``Float``s, ``Char``s and the like. Yet if we compare this to the introductory statement: We're still missing the brackets big time!

## As complexity grew

It quickly occured to me, that handling of any more complex data structures would be somewhat tougher.
Having to do some memory management we get to introduce side-effects. A function ``f :: [Int] -> [Int]`` would be exported as ``f :: CList Int -> IO (CList Int)``. Pythas would not only need to write the ``foreign export ccall`` statements but whole mappings lifting the exported functions into IO and converting their types.

Turns out strict typing isn't a problem I'd only encounter on Haskell's side. Python's ctypes library has weirdly strict typing too - you can read more about it in [another blog post](/posts/2021-03-28-ctypes-weird-and-inconvenient-typing.html).

I ended up rewriting the parser twice, and it still lacks better type checking using ghost types. Pythas grew and grew and soon I branched out several sub-projects:

+ C-Structs: C style structs for Haskell! These were necessary to accommodate complex data structures and hand them over. Surprisingly, no proper support had been added to either GHC or via third party packages. So this is available [on Hackage](https://hackage.haskell.org/package/C-structs).
+ Pythas-Types: The type definitions for all complex data types Pythas uses to interface. The idea would be that interfaces to other languages could build on the same memory representations.
+ Pythas-FFI: The parser and FFI code generator. Supported as shared library and executable alike!

Finally, obviously the Pythas package itself ships and compiles all of the above, such that installation remains easy.

## The question of purity in between

Both Python and especially Haskell promote lists as their goto types for collections. However, much like the languages themselves these lists are vastly distinct. Haskell's lists are implemented as proper linked lists. They support a single contained type. In contrast, Python lists are really [dynamic arrays](https://stackoverflow.com/a/3917632). They can contain data of various types at a time.
Like anything in Haskell, its lists are constant while Python's are mutable. But even the constant counterpart of lists in Python - tuples - feature multiple types at a time. Which in fact aligns them with the concept of tuples in Haskell.

I am an avid functional programmer; Why else would I bestow upon myself this task otherwise? So my first instinct for passing lists was to actually construct linked lists on memory and hand over the pointer to their ``head``. However, once you bridge the boundaries of languages, data structures arrive at a new level of temporarity. They are only created to be destroyed right after being passed to the other runtime. Linked lists just yield no benefit in this scenario.

Consequently, I introduced old school vectors as ``data CArray a = Struct2 Int (Ptr a)``. Currently the allocated space in these arrays is not reused, but it could.
Similarly, strings are just NULL-pointer marked wide char arrays. They are immutable in the interface as of now - but we'll see how much speed optimization is needed if anybody ever decides to actually use Pythas for anything productive.

A far less controversial choice is using structures for the interfacing of tuples. They're immutable in both languages and such are their counterparts in the interface. Not that there would be any alternative.

Ultimately, the current implementation favors immutable over mutable state as it is easier to manage. In case enough people actually find Pythas useful, I may consider optimizing on this part.

## Releasing the beast into the wild

It's hard to mark a single state in a year long's development as a release. Every fix, every new solution spawns a plethora of new ideas. I cannot consider Pythas finished. However, I am too curious if anybody finds use in it. I want this package to be out there at some point - might as well be now, after a year of pandemic. At least now I can do:

~~~haskell
f :: [Int] -> [Int]
>>> f([1,2,3])
[2,4,6]
~~~

With the upcoming release I realised it takes a little more than just good code. I stepped into the world of proper continuous integration with Travis-CI. Only for it to sell out right before my planned release. So another venture into GitHub-Actions succeeded. Turns out the lower memory on their machines causes some problems for Pythas' tests. It runs fine on my systems (sporting Linux, Windows and macOS).

Finally, I mention it all over the repos - but please: If you have a use case, feel free to contact me (see below) and show it off :)

