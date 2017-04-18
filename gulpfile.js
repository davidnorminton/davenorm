//requires the gulp package
var gulp = require('gulp');
// requires the gulp sass plugin
var sass = require('gulp-sass');
// Requires browser-sync so we can spin up a server
var browserSync = require('browser-sync');
// Requies useref which concats js files
var useref = require('gulp-useref');
// Require uglify to minify js
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
// Require gulp-cssnano to minify css files
var cssnano = require('gulp-cssnano');
// Require del to clean up distro directory
var del = require('del');
// optimise images
var imagemin = require('gulp-imagemin');
// Require gulp cache so we don't repeat image optimisations
var cache = require('gulp-cache');
// Require run-sequence for tasks
var runSequence = require('run-sequence');

// create a task to convert sass file to css
gulp.task('sass', function(){
    return gulp.src('app/css/*.scss')
    .pipe(sass())// converts
    .pipe(gulp.dest('app/css/'))
    // get browser-sync to update view
    .pipe(browserSync.reload({
        stream : true
    }))
});

// Gulp watch files for saved changes
gulp.task('watch', ['browserSync'],function(){
    // watch sass files
    gulp.watch('app/css/*.scss', ['sass']);
    // reload browser on html changes
    gulp.watch('app/*.html', browserSync.reload);
    // reload on js changes
    gulp.watch('app/js/*.js', browserSync.reload);
});

// use browser-sync
gulp.task('browserSync', function(){
    browserSync.init({
        server : {
            baseDir : 'app'
        }
    })
});

// gulp task concat and minify js
gulp.task('useref', function(){
    return gulp.src('app/*.html')
    .pipe(useref())
    // minify if js file
    .pipe(gulpIf('app/*.js', uglify()))
    // minify if css
    .pipe(gulpIf('app/*.css', cssnano()))
    .pipe(gulp.dest('distro'))
});

// optimise images
gulp.task('images', function(){
    return gulp.src('app/images/**.+(png|jpg|gif)')
    .pipe(cache(imagemin({
        interlaced : true,
        verbose : true
    })))
    .pipe(gulp.dest('distro/images'))
});


// clean up distro directory
gulp.task('clean:distro', function(){
    return del.sync('distro');
});

// sequence tasks
gulp.task('build', function(callback){
    runSequence('clean:distro', ['sass', 'useref', 'images', 'fonts', 'sound'],
    callback
    )
});

// run a default sequence
gulp.task('default', function(callback){
    runSequence(['sass', ['browserSync', 'watch']],
    callback
    )
});
//copy fonts
gulp.task('fonts', function(){
    return gulp.src(['app/fonts/**/*']).pipe(gulp.dest('distro/fonts'));
});
//copy sound dir
gulp.task('sound', function(){
    return gulp.src('app/sound/**/*').pipe(gulp.dest('distro/sound'));
});
