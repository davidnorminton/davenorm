const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

const sass = require('gulp-sass');
//const del = require('del');

gulp.task('styles', () => {
    return gulp.src('src/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task("default", function () {
  return tsProject.src()
                  .pipe(tsProject())
                  .js
                  .pipe(gulp.dest("dist/js"));
});


gulp.task('default', gulp.series(['styles']));
