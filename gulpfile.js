var gulp = require('gulp')
var coffee = require('gulp-coffee')
var mocha = require('gulp-mocha-phantomjs')

gulp.task('compile', function () {
  return gulp
    .src('./spec/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest './spec/')
})

gulp.task('test', ['compile'], function () {
  return gulp
    .src([
      './spec/performanceSpecRunner.html',
      './spec/functionalSpecRunner.html',
      './spec/amdSpecRunner.html'
      './spec/serverSpec.html',
    ])
    .pipe(mocha())
})
