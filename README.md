# PostCSS Specificity Ratings [![Build Status][ci-img]][ci]

[PostCSS] plugin that rates each CSS rule according to specificity. **This is my first foray into PostCSS plugin development**, so it's more like a pet project than something with real-world use (probably).

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/amielperez/postcss-specificity-ratings.svg
[ci]:      https://travis-ci.org/amielperez/postcss-specificity-ratings

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-specificity-ratings') ])
```

See [PostCSS] docs for examples for your environment.
