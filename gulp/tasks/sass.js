const gulp = require('gulp');
const $ = require("../plugins");
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
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.postcss(postcssOption))
    .pipe(gulp.dest(conf.dest))
})