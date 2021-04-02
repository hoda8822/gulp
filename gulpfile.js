const gulp = require('gulp');
const requireDir = require( 'require-dir' );

requireDir("./gulp/tasks");

gulp.task(
  "default",
  gulp.series(
    gulp.parallel(
      'pug',
      'sass',
      'scripts',
      'imagemin'
    ),
    gulp.parallel('serve','watch')
  ));