var gulp = require('gulp')
var browserify = require('browserify')
var babelify = require('babelify')
var watchify = require('watchify')
var source = require('vinyl-source-stream')
var logger = require('../util/bundleLogger')
var errors = require('../util/handleErrors')
var configFront = require('../config').browserify_front
var configBack = require('../config').browserify_back

gulp.task('browserify-front', function (callback) {
  var bundleQueue = configFront.bundleConfigs.length
  var browserifyThis = function (bundleConfig) {
    var bundler = browserify({
      cache: {},
      packageCache: {},
      fullPaths: true,
      entries: bundleConfig.entries,
      extensions: configFront.extensions,
      debug: configFront.debug
    })

    var bundle = function () {
      logger.start(bundleConfig.outputName)

      return bundler
        .transform(babelify)
        .bundle()
        .on('error', errors)
        .pipe(source(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', finished)
    }

    if (global.isWatching) {
      bundler = watchify(bundler)
      bundler.on('update', bundle)
    }

    var finished = function () {
      logger.end(bundleConfig.outputName)
      if (bundleQueue) {
        bundleQueue--
        if (bundleQueue === 0) {
          callback()
        }
      }
    }
    return bundle()
  }
  configFront.bundleConfigs.forEach(browserifyThis)
})

gulp.task('browserify-back', function (callback) {
  var bundleQueue = configBack.bundleConfigs.length
  var browserifyThis = function (bundleConfig) {
    var bundler = browserify({
      cache: {},
      packageCache: {},
      fullPaths: true,
      entries: bundleConfig.entries,
      extensions: configBack.extensions,
      debug: configBack.debug
    })

    var bundle = function () {
      logger.start(bundleConfig.outputName)

      return bundler
        .transform(babelify)
        .bundle()
        .on('error', errors)
        .pipe(source(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', finished)
    }

    if (global.isWatching) {
      bundler = watchify(bundler)
      bundler.on('update', bundle)
    }

    var finished = function () {
      logger.end(bundleConfig.outputName)
      if (bundleQueue) {
        bundleQueue--
        if (bundleQueue === 0) {
          callback()
        }
      }
    }
    return bundle()
  }
  configBack.bundleConfigs.forEach(browserifyThis)
})
