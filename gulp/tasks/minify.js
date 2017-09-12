var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var uglify = require('gulp-uglify')
var size = require('gulp-size')

gulp.task('minify-css', function () {
  return gulp.src('./public/assets/css/**/*.css')
  .pipe(cleanCSS({debug: true}, function (details) {
    console.log(details.name + ': ' + details.stats.originalSize)
    console.log(details.name + ': ' + details.stats.minifiedSize)
  }))
  .pipe(gulp.dest('./public/assets/css'))
})

gulp.task('minify-css-front', function () {
  return gulp.src('./public/assets/css/front/**/*.css')
  .pipe(cleanCSS({debug: true}, function (details) {
    console.log(details.name + ': ' + details.stats.originalSize)
    console.log(details.name + ': ' + details.stats.minifiedSize)
  }))
  .pipe(gulp.dest('./public/assets/css/front'))
})

gulp.task('minify-css-back', function () {
  return gulp.src('./public/assets/css/back/**/*.css')
  .pipe(cleanCSS({debug: true}, function (details) {
    console.log(details.name + ': ' + details.stats.originalSize)
    console.log(details.name + ': ' + details.stats.minifiedSize)
  }))
  .pipe(gulp.dest('./public/assets/css/back'))
})

gulp.task('minify-js', function () {
  return gulp.src('./public/assets/js/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./public/assets/js'))
  .pipe(size({title: 'js'}))
})

gulp.task('minify-js-front', function () {
  return gulp.src('./public/assets/js/front/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./public/assets/js/front'))
  .pipe(size({title: 'js'}))
})

gulp.task('minify-js-back', function () {
  return gulp.src('./public/assets/js/back/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./public/assets/js/back'))
  .pipe(size({title: 'js'}))
})

gulp.task('minify', ['minify-css', 'minify-js'])
gulp.task('minify-front', ['minify-css-front', 'minify-js-front'])
gulp.task('minify-back', ['minify-css-back', 'minify-js-back'])
