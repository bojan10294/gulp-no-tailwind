module.exports = {
  config: {
    port: 9050
  },
  paths: {
    root: './',
    src: {
      base: './src',
      css: './src/css',
      js: './src/js',
      img: './src/img'
    },
    dist: {
      base: './dist',
      css: './dist/css',
      js: './dist/js',
      img: './dist/img'
    },
    build: {
      base: './build',
      css: '../public/static/css',
      js: '../public/static/js',
      img: './build/img'
    }
  }
}
