var gulp = require('gulp')
var sass = require('gulp-sass')
var sassGlob = require('gulp-sass-glob')
var autoprefixer = require('gulp-autoprefixer')
var cssnano = require('gulp-cssnano')
var notify = require('gulp-notify')
var plumber = require('gulp-plumber')

// Styles: Compila SASS ~> CSS
gulp.task('build:styles', ['loginCSS'], () => {
  var autoprefixerOptions = {
    browsers: ['last 2 versions']
  }

  var sassOptions = {
    includePaths: [
    ],
    outputStyle: 'compressed'
  }
  return gulp.src('./src/styles/scss/style.scss')
    .pipe(sassGlob())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(plumber(plumberOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(cssnano())
    .pipe(gulp.dest('./public'))
})

var onError = function (err) {
  notify.onError({
    title: 'Error',
    message: '<%= error %>'
  })(err)
  this.emit('end')
}

var plumberOptions = {
  errorHandler: onError
}

gulp.task('loginCSS', () => {
  var autoprefixerOptions = {
    browsers: ['last 2 versions']
  }

  var sassOptions = {
    includePaths: [
    ],
    outputStyle: 'compressed'
  }
  return gulp.src('./src/login/custom-login.scss')
    .pipe(sassGlob())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(plumber(plumberOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(cssnano())
    .pipe(gulp.dest('./public/login'))
})
