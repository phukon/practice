# Whats `this` in Javascript?

It's a keyword that references another value, usually an object that represents the current execution context.

## But what the hell is `Execution` context?

-> it either refers to a global environment, like the browser or nodejs, or when used inside a function, it references the object calling that function at a given time.

```
        window
       /     in browser
      /
     /
    /
this
    \
     \
      \
       \
        global
              in nodejs
```

when using arrow functions, `this` is not redefined. It binds `this` to an object where the function has been defined rather than where it has been called.

---

### Footnotes.:

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- [yt](https://www.youtube.com/watch?v=4LWGZfkHeL8)
