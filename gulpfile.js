var gulp = require('gulp')
var postcss = require('gulp-postcss')
var plugin = require('./')

gulp.task('css', function(){
  var processors = [plugin]
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
})
