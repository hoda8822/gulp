const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const conf = require('../conf').imagemin;

const imageminOption = [
  imageminPngquant({ quality: [0.8, 1.0] }),
  imageminMozjpeg({ quality: 80 }),
  imagemin.gifsicle(),
  imagemin.mozjpeg(),
  imagemin.optipng(),
  imagemin.svgo()
]

// 画像圧縮
gulp.task('imagemin', () => {
  return gulp
    .src(conf.src)
    .pipe(imagemin(imageminOption))
    .pipe(gulp.dest('dist/images'))
});