---
title: Pythas Beta released
author: Simon Plakolb
subtitle: They asked me why and not even I would know
---

The [Pythas](https://github.com/pinselimo/Pythas) package provides an easy to use interface between Python and Haskell. Thus the mame Pyt(-hon) + Has(-kell). Or, to put it into a formal context:

~~~haskell
λ> (\a b -> (++) (take 3 a) (take 3 b)) "Python" "Haskell"
~~~

Let's call this function ```name```. Using Pythas you can now import it into Python:

~~~python
>>> from python import SourceModule
>>> name = SourceModule('''
...     name :: String -> String -> String
...     name a b = (++) (take 3 a) (take 3 b)
...     ''').name

>>>
>>> name("Python", "Haskell")
PytHas
~~~

This article covers only the beta release. Read [this blog post](/posts/2021-03-29-pythas-history.html) for a little story about how it came to be.

## What's in Pythas as of now

Pythas now allows functions (and constants) sporting:

+ Basic types such as integers, characters or floating point values.
+ Strings
+ Lists
+ Tuples
+ Nested lists and tuples
+ Nested combinations of lists, tuples, strings and basic types

Additionally it also has experimental support for custom types which can be handed as pointers so you can use Python as glue language.
That's the first distinction from [HaPy](https://github.com/ddfisher/HaPy) which doesn't support the more complex data structures.

The second distinction is, that Pythas refrains from using Template Haskell in "mission critical" logic. It thus requires no user intervention at any point of usage. Moreover, its exports are fully type checked by GHC!

Things it does not support as of now are:

+ Function pointers
+ Operations or conversions of custom types
+ Most language extensions
+ Anything I didn't remember ;)

## The discussion on use cases

I have been asked what Pythas is actually for. I mostly have educational as well as scientific use in mind.

Python is often used by beginner programmers for its ease of use. Haskell on the other hand has a lot to teach too. However, its learning curve is steep. Using Pythas you can now use *some* Haskell in your Python code and arrive at fruitful use of Haskell quicker.

As a systems scientist I like to use Haskell for writing correct models. However, for their analysis I really prefer Python. Not to mention my colleagues who would like me to spare them the Haskell hassle. Pythas may allow me in the future to have the best of both worlds.
In that scenario it serves a purpose reminiscent of [pyNetlogo](https://github.com/quaquel/pyNetLogo) or [NL4Py](https://github.com/chathika/NL4Py).

As to **why** I wrote this package, please refer to its [history](/posts/2021-03-29-pythas-history.html).
If you won't take this for an answer, let me ask you:

- Have you ever had some Haskell code and wanted to use it in Python? No?
- Did you ever encounter a Python programmer who really needed something only available in Haskell? Neither?
- Would you ever lay awake at night wondering how great it would be to use both Haskell and Python at once?

Well in case you're still curious, Pythas is available through [*pypi*](https://pypi.org/project/pythas/0.1b1/) now!
So don't hesitate, just:

~~~bash
$ pip install pythas; python -c "import pythas"
~~~

Full documentation can be found on [readthedocs.io](https://pythas.readthedocs.io).

