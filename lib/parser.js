var postcss = require('postcss');
var rater = require('./specificity-rater')
var _ = require('underscore')

module.exports = (root, result) => {
  // Transform CSS AST here
  root.walkRules((rule) => {
    var ratings = rater.rate(rule.selector)
    var commentText = ""
    commentPhrases = _.map(ratings, (rating) => {
                       return `${rating['selector']}: ${rating['specificity']}`
                     })
    var ruleHasImportant = false
    rule.walkDecls((decl) => {
      if(decl.important){
        ruleHasImportant = true
      }
    })
    commentText = `Specificity: ${commentPhrases.join('; ')}`
    if(ruleHasImportant){
      commentText = `${commentText} \nCaution: !important declarations will always be applied regardless of specificity`
    }
    rule.prepend(postcss.comment({ text: commentText}))
  })
};
