const babel = require('gulp-babel');
const del = require('del');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const server = browserSync.create();

const paths = {
	scripts: {
		js_main: 'js/*.js',
		js_partials: 'js/partials/*.js'
	},

	styles: {
		scss_main: 'scss/*.scss',
		scss_partials: 'scss/partials/*.scss'
	},

	templates: {
		html: './*.html'
	},

	expo: {
		dest_css: 'public/css/',
		dest_js: 'public/js/'
	},
};

const clean = () => del(['dist']);

function styles() {
	return gulp.src(paths.styles.scss_main, { sourcemaps: true })
		.pipe(sass())
		.pipe(uglifycss({
			"maxLineLen": 80,
			"uglyComments": true
		}))
		.pipe(gulp.dest(paths.expo.dest_css));
}

function scripts() {
	return gulp.src(paths.scripts.js_main, { sourcemaps: true })
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest(paths.expo.dest_js));
}

function reload(done) {
	server.reload();
	done();
}

function serve(done) {
	server.init({
		server: {
			baseDir: './'
		}
	});
	done();
}

function buildDirectory() {
	return gulp.src('*.*', {read: false})
		.pipe(gulp.dest('./dist'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(gulp.dest('./dist/img'));
};

const watch = () => gulp.watch(paths.scripts.js_main && paths.scripts.js_partials && paths.styles.scss_main && paths.styles.scss_partials && paths.templates.html, gulp.series(styles, scripts, reload));

gulp.task('default', gulp.series(clean, scripts, styles, serve, watch),);


gulp.task('build', gulp.series(clean, buildDirectory),);



