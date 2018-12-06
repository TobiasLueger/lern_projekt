const babel = require('gulp-babel');
// const concat = require('gulp-concat');
// const rename = require('gulp-rename');
const del = require('del');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
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

const watch = () => gulp.watch(paths.scripts.js_main && paths.scripts.js_partials && paths.styles.scss_main && paths.styles.scss_partials && paths.templates.html, gulp.series(styles, scripts, reload));

gulp.task('default', gulp.series(clean, scripts, styles, serve, watch),);



