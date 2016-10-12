var postcss = require('postcss');
var rater = require('./lib/specificity-rater')
var _ = require('underscore')

module.exports = postcss.plugin('postcss-specificity-ratings', (opts) => {
    opts = opts || {};
    // Work with options here
    return (root, result) => {
      // Transform CSS AST here
      root.walkRules((rule) => {
        var ratings = rater.rate(rule.selector)
        var commentText = ""
        commentPhrases = _.map(ratings, (rating) => {
                           return `${rating['selector']}: ${rating['specificity']}`
                         })
        rule.prepend(postcss.comment({ text: `Specificity: ${commentPhrases.join('; ')}` }))
      })
    };
});
