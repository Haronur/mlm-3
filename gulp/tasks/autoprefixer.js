var gulp = require('gulp')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('autoprefixer-front', function () {
  return gulp.src('./public/css/front/index.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('dist'))
})

gulp.task('autoprefixer-back', function () {
  return gulp.src('./public/css/back/index.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('dist'))
})

