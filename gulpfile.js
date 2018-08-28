var gulp = require('gulp'), gulpLoadPlugins = require('gulp-load-plugins'), plugins = gulpLoadPlugins()

var cdnUrl = [
	// [ 'assets/', 'https://s.anw.red/' ],
	[	'assets/vue.js', 'assets/vue.min.js' ]
]

gulp.task('default', function() {

	gulp.src('*.html')
		.pipe(plugins.cacheBust({
      type: 'MD5',
      basePath: './'
    	}))
		.pipe(plugins.batchReplace(cdnUrl))
    .pipe(plugins.htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('builds'))

	gulp.src('assets/main.js')
    .pipe(plugins.minify({
			ext:{
      	min:'.js'
      },
			noSource: true
		}))
    .pipe(gulp.dest('builds'))

		gulp.src('Better-Shadow.sketchplugin/')
	  	.pipe(plugins.zip('Better-Shadow-Latest.zip'))
	    .pipe(gulp.dest('Releases'))

	gulp.src('assets/*.css')
  	.pipe(plugins.cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('builds'))

})

gulp.task('watch', function() {
	gulp.watch(['*','*/*'], ['default'])
 })
