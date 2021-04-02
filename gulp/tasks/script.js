const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const conf = require('../conf').scripts;

gulp.task('scripts', () => {
  return webpackStream(conf, webpack)
    .pipe(gulp.dest("dist"));
});