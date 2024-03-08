const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require ('gulp-imagemin');
const uglify = require('gulp-uglify');


function style() {
    return gulp.src('./assests/src/styles/main.scss')
        .pipe(sass({outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

function images() {
    return gulp.src('./assests/src/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(style, scripts, images);

exports.watch = function(){
    gulp.watch('./assests/src/styles/*.scss', gulp.parallel(style));
    gulp.watch('./scripts/*.js', gulp.parallel(scripts));
}
