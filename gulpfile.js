var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    minifyCss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('less', function() {
  return gulp.src('css/style.less')
    .pipe(less())
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/'))
});

gulp.task('babel', function () {
  return gulp.src('js/main.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('js/build'));
});

gulp.task('autoprefixer', function () {
  return gulp.src('css/style.css')
    .pipe(postcss([ autoprefixer({ browsers: ['last 3 versions'] }) ]))
    .pipe(gulp.dest('css/'));
});

gulp.task('concat-css', function() {
  return gulp.src(['css/bootstrap.css', 'css/fontello.css', 'css/style.css'])
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('concat-js', function() {
  return gulp.src(['js/particle.js', 'js/react.min.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/build/'));
});

gulp.task('watch', function() {
  gulp.watch('css/*.less', ['less']);
  gulp.watch('js/main.js', ['babel', 'concat-js']);
  gulp.watch('css/*.css', ['autoprefixer', 'concat-css']);
});

gulp.task('default', ['watch']);
