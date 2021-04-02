const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const flexBugsFixes = require('postcss-flexbugs-fixes');
const cssWring = require('csswring');
const conf = require('../conf').sass;

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
  return gulp
    .src(conf.src)
    .pipe(sass())
    .pipe(postcss(postcssOption))
    .pipe(gulp.dest('./dist'))
})