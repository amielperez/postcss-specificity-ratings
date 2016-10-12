var specificity = require('specificity')

var rater = {
  rate: function(selector){
    result = specificity.calculate(selector)
    return result[0]['specificityArray']
  }
}

module.exports = rater
