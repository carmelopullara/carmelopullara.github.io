'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const autoprefixer = require('gulp-autoprefixer');
const source = require('vinyl-source-stream');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const babelify = require('babelify');
const reload = browserSync.reload;


gulp.task('sass', function () {
  gulp.src('./src/sass/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: [
        '> 5%',
        'last 2 versions',
        'Firefox >= 20'
      ],
      cascade: false
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(reload({stream: true}));
});

gulp.task('build', () => {

  return browserify({
    entries: './src/js/index.js',
    extensions: ['.jsx', '.js'],
    debug: false
  })
  .transform('babelify', {presets: ["es2015", "react"]})
  .bundle()
  .on('error', (e) => {
    gutil.log(e)
  })
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));

});

gulp.task('pug', () => {
  var YOUR_LOCALS = {};

  gulp.src('./*.pug')
    .pipe(pug({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./'))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['pug', 'sass'], () => {

  browserSync({
    server: './',
    port: 8000,
    open: false,
    notify: false,
    reloadDelay: 1000
  });

  gulp.watch('./src/sass/*.scss', ['sass']);
  gulp.watch('./*.pug', ['pug']);
  gulp.watch(['./src/js/**/*.js', './src/js/**/*.jsx'], ['build']);
  gulp.watch('./build/**/*.js').on('change', browserSync.reload);

});
