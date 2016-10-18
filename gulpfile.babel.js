import gulp from 'gulp'
require('require-dir')('./tasks')
// Instalar babel-preset-latest & gulp-sass-glob
// sudo npm i -D require-dir babel-preset-latest babel-cli gulp-sass-glob

// Build
gulp.task('build', ['clean'], () => {
  gulp.start('build:styles', 'build:scripts', 'build:images', 'build:php')
})

// Default
gulp.task('default', ['build'], () => {
  gulp.start('copy', 'watch')
})
