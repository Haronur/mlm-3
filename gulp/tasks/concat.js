var gulp = require('gulp')
var concat = require('gulp-concat')

var frontLibs = [
  './plugins/parsley.js',
  './plugins/noty.js',
  './plugins/uniform.js',
  './plugins/jquery.ui.core.js',
  './plugins/jquery.ui.widget.js',
  './plugins/jquery.ui.mouse.js',
  './plugins/jquery.ui.transition.js',
  './plugins/bootstrap.datepicker.js',
  './plugins/progressbar.js',
  './plugins/superclick.js',
  './plugins/inputSwitchAlt.js',
  './plugins/slimscroll.js',
  './plugins/slidebars.js',
  './plugins/piegage.js',
  './plugins/screenfull.js',
  './plugins/contentBox.js',
  './plugins/overlay.js',
  './plugins/table/datatable.js',
  './plugins/table/datatable-bootstrap.js',
  './plugins/table/tablesorter.js',
  './plugins/table/responsive.js',
  './plugins/bootstrap.switch.js',
  './plugins/slick.js'
]

var backLibs = [
  './plugins/parsley.js',
  './plugins/noty.js',
  './plugins/uniform.js',
  './plugins/parsley.js',
  './plugins/noty.js',
  './plugins/jquery.ui.core.js',
  './plugins/jquery.ui.widget.js',
  './plugins/jquery.ui.mouse.js',
  './plugins/jquery.ui.transition.js',
  './plugins/bootstrap.datepicker.js',
  './plugins/progressbar.js',
  './plugins/superclick.js',
  './plugins/inputSwitchAlt.js',
  './plugins/slimscroll.js',
  './plugins/slidebars.js',
  './plugins/piegage.js',
  './plugins/screenfull.js',
  './plugins/contentBox.js',
  './plugins/overlay.js',
  './plugins/table/datatable.js',
  './plugins/table/datatable-bootstrap.js',
  './plugins/table/tablesorter.js',
  './plugins/table/responsive.js',
  './plugins/bootstrap.switch.js',
  './plugins/summernote.js',
  './plugins/slick.js'
]

gulp.task('concat-front', function () {
  return gulp.src(frontLibs)
    .pipe(concat('theme.js'))
    .pipe(gulp.dest('./public/assets/js/front/'))
})

gulp.task('concat-back', function () {
  return gulp.src(backLibs)
    .pipe(concat('theme.js'))
    .pipe(gulp.dest('./public/assets/js/back/'))
})
