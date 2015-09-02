var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    minifyCss = require('gulp-minify-css'),
    concat = require('gulp-concat');

gulp.task('less', function() {
  return gulp.src('css/style.less')
    .pipe(less())
    .pipe(gulp.dest('css/'))
});

gulp.task('babel', function () {
  return gulp.src('js/main.js')
    .pipe(babel())
    .pipe(gulp.dest('js/build'));
});

gulp.task('autoprefixer', function () {
  return gulp.src('css/style.css')
    .pipe(postcss([ autoprefixer({ browsers: ['last 3 versions'] }) ]))
    .pipe(gulp.dest('css/'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/style.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
  gulp.watch('css/*.less', ['less']);
  gulp.watch('js/main.js', ['babel']);
  gulp.watch('css/*.css', ['autoprefixer', 'minify-css']);
});



gulp.task('default', ['watch']);
