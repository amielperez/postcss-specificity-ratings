var postcss = require('postcss');
var parser = require('./lib/parser')

module.exports = postcss.plugin('postcss-specificity-ratings', (opts) => {
    opts = opts || {};
    // Work with options here
    return parser;
});
