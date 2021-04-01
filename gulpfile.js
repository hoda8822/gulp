const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const flexBugsFixes = require('postcss-flexbugs-fixes');
const cssWring = require('csswring');
const pug = require( 'gulp-pug' );
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const browserSync = require('browser-sync').create();

const browserSyncOption = {
  server: './dist'
}

const imageminOption = [
  imageminPngquant({ quality: [0.8, 1.0] }),
  imageminMozjpeg({ quality: 80 }),
  imagemin.gifsicle(),
  imagemin.mozjpeg(),
  imagemin.optipng(),
  imagemin.svgo()
]

const autoprefixerOption = {
  grid: true
}
const postcssOption = [
  flexBugsFixes,
  autoprefixer(autoprefixerOption),
  cssWring
]

// scssをコンパイルするタスク
gulp.task('sass', () => {
  return gulp.src(['./src/**/*.{sass,scss}','!./src/css/**/_*.{sass,scss}'])
    .pipe(sass())
    .pipe(postcss(postcssOption))
    .pipe(gulp.dest('./dist'))
})

// pugをコンパイルするタスク
gulp.task('pug', () => {
  return gulp
    .src(['./src/html/**/*.pug','!./src/html/**/_*.pug'])
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('./dist'))
})

// 画像圧縮
gulp.task('imagemin', () => {
  return gulp
    .src('./src/images/*')
    .pipe(imagemin(imageminOption))
    .pipe(gulp.dest('dist/images'))
});

// ローカルサーバー起動、自動更新用タスク
gulp.task('serve', (done) => {
  browserSync.init(browserSyncOption)
  done()
});

gulp.task('watch', (done) => {
  const browserReload = (done) => {
    browserSync.reload()
    done()
  }

  gulp.watch('./src/css/**/*.scss',gulp.series('sass',browserReload))
  gulp.watch('./src/html/**/*.pug',gulp.series('pug',browserReload))
});

gulp.task(
  'default',
  gulp.series(
    gulp.parallel("pug","sass"),
    gulp.parallel("serve","watch")
  )
)