var postcss = require('postcss');
var rater = require('./lib/specificity-rater')
var _ = require('underscore')

module.exports = postcss.plugin('postcss-specificity-ratings', function (opts) {
    opts = opts || {};
    // Work with options here
    return function (root, result) {
      // Transform CSS AST here
      root.walkRules(function(rule){
        var ratings = rater.rate(rule.selector)
        var commentText = ""
        _.each(ratings, function(rating){
          commentText = commentText.concat("\n" + rating['selector'] + ": " + rating['specificity'])
        })
        rule.prepend(postcss.comment({ text: "Specificity: " + commentText }))
      })
    };
});
