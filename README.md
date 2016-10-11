# PostCSS Specificity Ratings [![Build Status][ci-img]][ci]

[PostCSS] plugin mainly written as my first foray into PostCSS plugin development. It rates each CSS rule according to specificity.

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
