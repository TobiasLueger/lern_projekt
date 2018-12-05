// import babel from 'gulp-babel';
// import concat from 'gulp-concat';
const del = require('del');
const gulp = require('gulp');
// import uglify from 'gulp-uglify';
const browserSync = require('browser-sync');
const sass = require('gulp-sass');


const server = browserSync.create();

const paths = {
	scripts: {
		html: './*.html',
		js: 'js/*.js',
		scss_main: 'scss/*.scss',
		scss_partials: 'scss/partials/*.scss',
		dest: 'public/css/'
	}
};

const clean = () => del(['dist']);

function scripts() {
	return gulp.src(paths.scripts.js && paths.scripts.scss_main, { sourcemaps: true })
		// .pipe(uglify())
		// .pipe(babel())
		.pipe(sass())
		// .pipe(concat('index.min.js'))
		.pipe(gulp.dest(paths.scripts.dest));
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

const watch = () => gulp.watch(paths.scripts.js && paths.scripts.scss_main && paths.scripts.scss_partials && paths.scripts.html, gulp.series(scripts, reload));

gulp.task('default', gulp.series(clean, scripts, serve, watch),);




