var specificity = require('specificity')
var _ = require('underscore')

var rater = {
  rate: function(selector){
    result = specificity.calculate(selector)
    return _.map(result, function(item){
      return {
               selector: item['selector'],
               specificity: item['specificity']
             }
    })
  }
}

module.exports = rater
