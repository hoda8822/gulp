const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const browserSyncOption = {
  server: './dist'
}

// ローカルサーバー起動、自動更新用タスク
gulp.task('serve', (done) => {
  browserSync.init(browserSyncOption)
  done()
});