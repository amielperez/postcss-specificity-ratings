# PostCSS Specificity Ratings [![Build Status][ci-img]][ci]

[PostCSS] plugin that rates each CSS rule according to specificity. **This is my first foray into PostCSS plugin development**, so it's more like a pet project than something with real-world use (probably).

Special thanks to https://github.com/keeganstreet/specificity for providing a calculation service for specificity.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/amielperez/postcss-specificity-ratings.svg
[ci]:      https://travis-ci.org/amielperez/postcss-specificity-ratings

```css
.foo {
  background: white;
}

.foo > p.bar {
  background: black;
}
```

```css
.foo {
  /* Specificity: 0,0,1,0 */
  background: white;
}

.foo > p.bar {
  /* Specificity: 0,0,2,1 */
  background: black;
}
```

## Usage

```js
postcss([ require('postcss-specificity-ratings') ])
```

See [PostCSS] docs for examples for your environment.
