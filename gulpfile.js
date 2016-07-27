/* File: gulpfile.js */
// grab our packages
var gulp   = require('gulp'),
    sass   = require('gulp-sass');
    sassGlob = require('gulp-sass-glob');
    plumber = require('gulp-plumber');
    autoprefixer = require('gulp-autoprefixer');
    cleanCss = require('gulp-clean-css');

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the sass compilation task for theme
gulp.task('build-css', function() {
  return gulp.src('scss/theme.scss')
    .pipe(plumber({
        errorHandler: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['build-css']);
});
