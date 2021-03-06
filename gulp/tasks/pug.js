const gulp = require('gulp');
const $ = require("../plugins");
const conf = require('../conf').pug;


// pugをコンパイルするタスク
gulp.task('pug', () => {
  return gulp
    .src(conf.src)
    .pipe($.pug({ pretty: true }))
    .pipe(gulp.dest('./dist'))
})