var runSequence = require('run-sequence')
var gulp = require('gulp')

gulp.task('dev-front', function () {
  runSequence(
    'browserify-front',
    'concat-front',
    'sass-front',
    'autoprefixer-front')
})

gulp.task('dev-back', function () {
  runSequence(
    'browserify-back',
    'concat-back',
    'sass-back',
    'autoprefixer-back')
})

gulp.task('default', function () {
  runSequence(
    'browserify-front',
    'sass-front',
    'autoprefixer-front',
    'watch-front')
})

gulp.task('back', function () {
  runSequence(
    'browserify-back',
    'sass-back',
    'autoprefixer-back',
    'watch-back')
})

gulp.task('dist-front', function () {
  runSequence(
    'browserify-front',
    'sass-front',
    'autoprefixer-front',
    'minify-front')
})

gulp.task('dist-back', function () {
  runSequence(
    'browserify-back',
    'sass-back',
    'autoprefixer-back',
    'minify-back')
})
