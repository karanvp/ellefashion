

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('/var/www/html/ellefashion/web/themes/custom/ellefashion/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('/var/www/html/ellefashion/web/themes/custom/ellefashion/css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./*.scss', ['sass']);
};