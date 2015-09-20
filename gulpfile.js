var gulp          = require('gulp');
var less          = require('gulp-less');
var watch         = require('gulp-watch');
var autoprefixer  = require('gulp-autoprefixer');
var babel         = require('gulp-babel');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglify');

gulp.task('styles', () => {
  return gulp.src('./css/.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['> 5%'],
      cascade: false
    }))
    .pipe(gulp.dest('./css/'));
});

gulp.task('babel',  () => {
  return gulp.src('js/main.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('js/build'));
});

gulp.task('concat-css', () => {
  return gulp.src(['css/bootstrap.css', 'css/fontello.css', 'css/style.css'])
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', () => {
  gulp.watch('css/*.less', ['styles']);
  gulp.watch('js/main.js', ['babel']);
  gulp.watch('css/*.css', ['concat-css']);
});

gulp.task('default', ['watch']);
