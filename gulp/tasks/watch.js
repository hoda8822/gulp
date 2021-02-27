const gulp = require('gulp');
const browserSync = require('browser-sync').create();



gulp.task('watch', (done) => {
  const browserReload = (done) => {
    browserSync.reload()
    done()
  }

  gulp.watch('./dist/**/*', browserReload)
});