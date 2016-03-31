var gulp = require('gulp');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var uglify = require('gulp-uglify');

gulp.task('css', function () {
  return gulp.src('css/**/*.css')
    .pipe(concat('toth.min.css'))
    .pipe(nano())
    .pipe(gulp.dest('toth'));
});

gulp.task('js', function () {
  return gulp.src('js/**/*.js')
    .pipe(concat('toth.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('toth'));
});

gulp.task('default', ['css', 'js']);

gulp.task('watch', ['default'], function () {
  gulp.watch('js/**/*.js', ['js']);
  gulp.watch('css/**/*.css', ['css']);
});
