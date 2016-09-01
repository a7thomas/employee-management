var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('controller', function() {
  return gulp.src('./public/scripts/controller/*.js')
    .pipe(concat('controller.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./public/scripts'));
});
gulp.task('service', function() {
  return gulp.src('./public/scripts/services/*.js')
    .pipe(concat('service.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./public/scripts'));
});
gulp.task('watch', function() {
  gulp.watch('./public/scripts/controller/*.js', ['controller']);
  gulp.watch('./public/scripts/services/*.js', ['service']);
});

gulp.task('default', ['controller','watch','service']);