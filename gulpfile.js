const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const sass = require('gulp-sass');
// Require run-sequence for tasks
const runSequence = require('gulp4-run-sequence');
// Require del to clean up distro directory
var del = require('del');
// Requies useref which concats js files
var useref = require('gulp-useref');

//const del = require('del');

gulp.task('sass', () => {
    return gulp.src('src/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});



gulp.task("typescript", function () {
  return tsProject.src()
                  .pipe(tsProject())
                  .js
                  .pipe(gulp.dest("dist/js"));
});

// gulp task concat and minify js
gulp.task('useref', function(){
  return gulp.src('src/*.html')
  .pipe(useref())
  .pipe(gulp.dest('dist'))
});

// sequence tasks
gulp.task('build', function(callback){
  runSequence(['sass', 'typescript', 'useref'],
  callback
  )
});