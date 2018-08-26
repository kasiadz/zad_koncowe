const gulp = require('gulp');

// gulp.task('test', function(){
    // default to domyślny plik i nie trzeba pisać potem gulp test tylko samo gulp
// gulp.task('default', function(){
//     console.log('test z GULPa');
// });
// w bashu wpisuje gulp test - wywołuję gulp test

const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('reload', function(){
    browserSync.reload();
});

gulp.task('serve', ['sass'], function(){
    browserSync({
        server: 'src'
    })
    gulp.watch('src/*.html', ['reload']);
    gulp.watch('src/scss/**/*.scss',['sass']);
});

 //(przed pipe) daliśmy enter ale nie trzeba
    // pipe łaczy stringi?
gulp.task('sass', function(){
    // ** to wszystkie podfoldery scss
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

// det pokazuje gdzie zapisujemy 
gulp.task('js', function(){
    return gulp.src('src/js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('src/js'))
});

gulp.task('default', ['serve']);