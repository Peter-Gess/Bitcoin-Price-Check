const gulp = require('gulp');
const del = require('del');

gulp.task('watchFiles', function () {
  gulp.watch('app.js', ['concatScripts'])
});

gulp.task('build', function (){
  return gulp.src( { base: './'})
  .pipe(gulp.dest('dist'))
});

gulp.task('clean', function () {
  dell('dist')
});

gulp.task('serve', ['watchFiles']);
