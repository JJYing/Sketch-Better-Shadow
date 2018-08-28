var gulp = require('gulp'), gulpLoadPlugins = require('gulp-load-plugins'), plugins = gulpLoadPlugins()

var cdnUrl = [
	// [ 'assets/', 'https://s.anw.red/' ],
	[	'assets/vue.js', 'assets/vue.min.js' ]
]

gulp.task('temp', function() {
	gulp.src('Better-Shadow.sketchplugin/**')
    .pipe(gulp.dest('temp/Better-Shadow.sketchplugin'))
})

gulp.task('zip', function() {
	gulp.src('temp/**')
  	.pipe(plugins.zip('Better-Shadow-Latest.zip'))
    .pipe(gulp.dest('Releases'))
})

gulp.task('clean', function() {
	return gulp.src('temp/**', {read: false})
    .pipe(plugins.clean());
})

gulp.task('default', plugins.sequence('temp', 'zip'))

gulp.task('watch', function() {
	gulp.watch(['*','*/*'], ['default'])
 })
