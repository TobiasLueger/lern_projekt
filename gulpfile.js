var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch');


gulp.task('default', function()
{
	gulp.watch('scss/*.scss', function()
		{
			return gulp.src('scss/main.scss')
				.pipe(sass())
				.pipe(gulp.dest('public/css'));
		}
	);
}
);
