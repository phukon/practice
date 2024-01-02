# Monads in functional programming

![Static Badge](https://img.shields.io/badge/Typescript-blue)

>🔊 A monad in X is a <b>monoid</b> in the <u>category</u> of <i>endofunctors</i> of X.

I came across the term <b>MONAD</b> in a meme and when I googled. The above sentence was what I got.
> Not very helpful when you're trying to learn about monads in functional programming isn't it?


 - This codebase demonstrates the Monadic pattern in functional programming.
 - I've verbosely commented every nook and cranny to help understand what's going on.
 - To understand the code's evolution, follow the files in numerical order by their names much like flipping through the pages of a book.



![monad](https://github.com/phukon/practice/assets/60285613/2f26c765-1a94-432f-be41-638656b64305)

# Read this before diving into the code
### All monads have three components:
- <b>Wrapper Type</b>: A wrapper of some sorts that mark the type of the component.
- <b>Wrap Function (allows entry to monad ecosystem)</b>: A function that takes normal values and wraps it up in a monad, like a constructor of sorts. These are called <b> return, pure or unit</b>
- <b>Run Function (runs transformations on monadic values)</b>: Takes the wrapper type and transform function(not the Wrap Function) that accepts the unwrapped type and returns the wrapper type. Runs the transformation function on the argument passed in. aka bind, flatmap, >>=

## Mapping the components to the code in this tutorial

- Wrapper Type:  `NumberWithLog`
- Wrap Function: `function wrapWithLogs`
- Run Function: `function runWithLogs`

## Animation
> If you look closely, Monads allow a user to chain operations while the Monad manages the secret work bts.

![chrome_D7YIhZIH56](https://github.com/phukon/practice/assets/60285613/7df0fb39-4953-4918-899c-c2bf6c175caa)

TAGS:  [category theory, monoids, functors, endofunctors, morphisms]

---
Footnotes:

1. [A monad is a monoid in the category of endofunctors. Whats the problem?](https://www.youtube.com/watch?v=ENo_B8CZNRQ)
2. [What is a Monad? - Computerphile](https://www.youtube.com/watch?v=t1e8gqXLbsU)
3. [The Absolute Best Intro to Monads For Software Engineers](https://www.youtube.com/watch?v=C2w45qRc3aU)
