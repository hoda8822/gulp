const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('watch', (done) => {

  const reload = (done) => {
    browserSync.reload();
    done();
  }

  gulp.watch(['./src/css/**/*.scss'], gulp.series('sass', reload))

  gulp.watch(['./src/html/**/*.pug'], gulp.series('pug', reload))

  gulp.watch(['./src/js/**/*.js'], gulp.series('scripts', reload))
});