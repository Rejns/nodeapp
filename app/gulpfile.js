var gulp = require('gulp');
var inject = require('gulp-inject');
var sass = require('gulp-sass');
var gulpCopy = require('gulp-copy');
var angularFilesort = require('gulp-angular-filesort');
 
var paths = {
    index: "index.html",
};

gulp.task('sass', function () {
	gulp.src('./scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});

gulp.task('copy', function () {
    return gulp.src(['./node_modules/angular/angular.min.js',
                     './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
                     './node_modules/angular-resource/angular-resource.min.js'])
        .pipe(gulp.dest('./js/lib'));

});

gulp.task('inject', ['copy'], function() {
    gulp.src(paths.index)
        .pipe(inject(gulp.src(['./js/**/*.js']).pipe(angularFilesort())))
        .pipe(inject(gulp.src(['./css/**/*.css'])))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
	gulp.watch('./scss/*', ['sass']);
});

gulp.task("build", ["copy", "sass", "inject"]);
