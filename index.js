var postcss = require('postcss');
var rater = require('./lib/specificity-rater')

module.exports = postcss.plugin('postcss-specificity-ratings', function (opts) {
    opts = opts || {};
    // Work with options here
    return function (root, result) {
      // Transform CSS AST here
      root.walkRules(function(rule){
        rating = rater.rate(rule.selector)
        rule.prepend(postcss.comment({ text: "Specificity: " + rating.join(",") }))
      })
    };
});
