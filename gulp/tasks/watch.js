var gulp = require('gulp')
var config = require('../config')

gulp.task('watch-front', function () {
  gulp.watch(config.browserify_front.watch, ['browserify-front'])
  gulp.watch(config.sass_front.watch, ['sass-front', 'autoprefixer-front'])
})

gulp.task('watch-back', function () {
  gulp.watch(config.browserify_back.watch, ['browserify-back'])
  gulp.watch(config.sass_back.watch, ['sass-back', 'autoprefixer-back'])
})

