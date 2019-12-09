const gulp = require('gulp')
	, pug = require('gulp-pug')
	, fs = require('fs')
	, browserSync = require('browser-sync').create()
	, reload = browserSync.reload
	, sass = require('gulp-sass')
	, plumber = require('gulp-plumber')
	, spritesmith = require('gulp.spritesmith')
	, sassGlob = require('gulp-sass-glob')
	, sourcemaps = require('gulp-sourcemaps')
	, csso = require('gulp-csso')
	, autoprefixer = require('gulp-autoprefixer')
	, imagemin = require('gulp-imagemin')
	, uglify = require('gulp-uglify')
	, concat = require('gulp-concat')
	, rename = require('gulp-rename')
	, cssMin = require('gulp-css')
	, cssunit = require('gulp-css-unit');

// server
gulp.task('server', function() {
	browserSync.init({
		open: false,
    notify: false,
		server: {
			baseDir: "./dist",
		}
	});
});

gulp.task('compress', function () {
	gulp.src('src/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'))
});

gulp.task('fonts', function() {
	gulp.src('./src/fonts/*')
		.pipe(gulp.dest('./dist/fonts/'))
});

gulp.task('sass', function() {
	return gulp.src('./src/styles/main.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers : ['> 5%'],
			cascade : false
		}))
		// .pipe(cssunit({
		// 	type     :    'px-to-rem',
		// 	rootSize  :    16
		// }))
		.pipe(csso())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/css/'))
		.pipe(reload({stream : true}));
});

gulp.task('cssMinfy', function(){
	return gulp.src([
		'src/libscss/*.css',
		'node_modules/bootstrap/dist/css/bootstrap.min.css',
		'node_modules/slick-carousel/slick/slick.css',
		'node_modules/normalize.css/normalize.css',
		'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
		'node_modules/chart.js/dist/Chart.min.css'
	])
		.pipe(cssMin())
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('pug', function() {

	gulp.src('src/views/pages/**/*.pug')
		.pipe(plumber())
		.pipe(pug({
		// 	locals : JSON.parse(fs.readFileSync('./content.json', 'utf8')),
			pretty: true,
		}))
		.pipe(gulp.dest('dist'))
		.pipe(reload({stream : true}));
});

gulp.task('js', function(){
	return gulp.src([
		'node_modules/jquery/dist/jquery.min.js',
		'src/libs/*.js',
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
		'node_modules/slick-carousel/slick/slick.min.js',
		'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
		'node_modules/chart.js/dist/Chart.min.js'
	])
		.pipe(concat('libs.js'))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('mainJs', function(){
	return gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('sprite', function () {
	var spriteData = gulp.src(
		'./src/img/icons/*.png'
	).pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.scss',
		cssFormat: 'css',
		imgPath: '../img/sprite.png',
		padding: 70
	}));

	spriteData.img.pipe(gulp.dest('./dist/img'));
	spriteData.css.pipe(gulp.dest('./src/styles/sprite'));
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.pug', ['pug']);
	gulp.watch('src/**/*.scss', ['sass']);
	gulp.watch('src/libscss/*.css', ['cssMinfy']);
	gulp.watch('src/**/*.js', ['js']);
	gulp.watch('src/**/*.js', ['mainJs']);
	gulp.watch('src/fonts/*', ['fonts']);
});

gulp.task('build', ['sass', 'cssMinfy', 'pug', 'fonts', 'compress', 'js', 'mainJs', 'sprite']);
gulp.task('default', ['sass', 'cssMinfy', 'pug', 'fonts', 'compress', 'js', 'mainJs', 'sprite', 'server', 'watch']);