
module.exports.pug = {
  src: [
    './src/html/**/*.pug',
    '!./src/html/**/_*.pug'
  ]
}

module.exports.sass = {
  src: [
    './src/**/*.{sass,scss}',
    '!./src/css/**/_*`.{sass,scss}'
  ]
}

module.exports.imagemin = {
  src: [
    './src/**/*.{jpg,jpeg,png,gif,svg}'
  ],
  opts: {
    pngquant: {
      quality: [0.8, 1.0],
      speed: 1
    },
    mozjpeg: {
      quality: 75,
      progresive: true,
    },
    svgo: {
      plugins: [{ removeViewBox: false }, { cleanupIDs: true }],
    },
  }
}

module.exports.scripts = {
  mode: 'production', //本番用（開発ならdevelopment（圧縮されない））
  entry: './src/js/main.js',// エントリ-ポイント
  output: {
    filename: './js/main.min.js',
  },
}