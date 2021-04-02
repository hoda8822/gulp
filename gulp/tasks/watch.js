const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('watch', (done) => {
  const browserReload = (done) => {
    browserSync.reload()
    done()
  }

  gulp.watch('./src/css/**/*.scss', gulp.series('sass', browserReload))

  gulp.watch('./src/html/**/*.pug', gulp.series('pug', browserReload))

  gulp.watch('./src/js/**/*.js', gulp.series('scripts', browserReload))
});