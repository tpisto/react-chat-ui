const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');

// Compile all necessary files to "lib" directory
gulp.task('compile', function() {
  gulp.src(['src/**/*.js','index.js'])
    .pipe(plumber())
    .pipe(babel({
        presets: ["es2015", "stage-0", "react"]
    }))
    .pipe(gulp.dest('lib'))
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['compile']);
});
