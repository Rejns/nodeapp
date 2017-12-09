var gulp = require('gulp');
var nodemon = require('gulp-nodemon')
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
 
var paths = {
    index: "index.html",
};

gulp.task('clean', function () {
    gulp.src('./fonts/*', {read: false})
    	.pipe(clean());
});

gulp.task('sass', function () {
	gulp.src('./scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});

gulp.task('inject', function() {
 	var sources = gulp.src(['./js/**/*.js', './css/**/*.css'], {read: false});

    gulp.src(paths.index)
        .pipe(wiredep({}))
        .pipe(inject(sources))
        .pipe(gulp.dest('.'));
});

gulp.task('fonts', function() {
    gulp.src(['./bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.*'])
    	.pipe(gulp.dest('./fonts/'));
});

gulp.task('start', function () {
	nodemon({
	 	script: 'server.js'
	});
});

gulp.task('watch', function() {
	gulp.watch('./scss/*', ['sass']);
});

gulp.task("build", ["clean", "sass", "inject", "fonts"]);

gulp.task("default", ["clean", "sass", "inject", "fonts", "start", "watch"]);
