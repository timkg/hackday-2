var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function () {
  gulp.src('src/js/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('copy', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));

  gulp.src('src/topbar.png')
    .pipe(gulp.dest('dist'))

  gulp.src('src/js/jquery-2.1.1.min.js')
    .pipe(gulp.dest('dist/js'))

  gulp.src('src/js/user.js')
    .pipe(gulp.dest('dist/js'))

  gulp.src('src/progress.json')
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['browserify', 'copy'])

gulp.task('watch', function () {
  gulp.watch('src/**/*.*', ['default'])
})
