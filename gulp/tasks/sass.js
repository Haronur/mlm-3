var gulp = require('gulp')
var sass = require('gulp-sass')
var plumber = require('gulp-plumber')
var csscomb = require('gulp-csscomb')
var autoPrefixer = require('gulp-autoprefixer')
var size = require('gulp-size')
var errors = require('../util/handleErrors')
var logger = require('../util/bundleLogger')
var configFront = require('../config').sass_front
var configBack = require('../config').sass_back
var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
]

gulp.task('sass-front', function () {
  var finished = function () {
    logger.end(configFront.dest + '/theme.css')
  }

  return gulp.src(configFront.src)
    .pipe(plumber())
    .pipe(sass())
    .on('error', errors)
    .pipe(csscomb())
    .pipe(autoPrefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(gulp.dest(configFront.dest))
    .on('end', finished)
    .pipe(size({title: 'styles'}))
})

gulp.task('sass-back', function () {
  var finished = function () {
    logger.end(configBack.dest + '/_theme.css')
  }

  return gulp.src(configBack.src)
    .pipe(plumber())
    .pipe(sass())
    .on('error', errors)
    .pipe(csscomb())
    .pipe(autoPrefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(gulp.dest(configBack.dest))
    .on('end', finished)
    .pipe(size({title: 'styles'}))
})
