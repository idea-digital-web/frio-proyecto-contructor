var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var pngquant = require('imagemin-pngquant')
var imageminSvgo = require('imagemin-svgo')
var imageminOptipng = require('imagemin-optipng')
var imageminJpegtran = require('imagemin-jpegtran')
var cache = require('gulp-cache')

// Images
gulp.task('build:images', ['screenshot', 'login'], () => {
  gulp.src('./src/images/**')
    .pipe(cache(imagemin({
      optimizationLevel: 7,
      progressive: true,
      interlaced: true,
      multipass: true,
      use: [
        pngquant(),
        imageminSvgo(),
        imageminOptipng({optimizationLevel: 7}),
        imageminJpegtran({progressive: true})
      ],
      svgoPlugins: [
        { removeViewBox: false }, // don't remove the viewbox atribute from the SVG
        { removeUselessStrokeAndFill: false }, // don't remove Useless Strokes and Fills
        { removeEmptyAttrs: false } // don't remove Empty Attributes from the SVG
      ]
    })))
    .pipe(gulp.dest('./public/images'))
})
gulp.task('screenshot', () => {
  gulp.src('./src/screenshot.png')
    .pipe(cache(imagemin({
      optimizationLevel: 7,
      progressive: true,
      interlaced: true,
      multipass: true,
      use: [
        pngquant(),
        imageminSvgo(),
        imageminOptipng({optimizationLevel: 7}),
        imageminJpegtran({progressive: true})
      ],
      svgoPlugins: [
        { removeViewBox: false }, // don't remove the viewbox atribute from the SVG
        { removeUselessStrokeAndFill: false }, // don't remove Useless Strokes and Fills
        { removeEmptyAttrs: false } // don't remove Empty Attributes from the SVG
      ]
    })))
    .pipe(gulp.dest('./public'))
})
gulp.task('login', () => {
  gulp.src('./src/login/*.*g')
    .pipe(cache(imagemin({
      optimizationLevel: 7,
      progressive: true,
      interlaced: true,
      multipass: true,
      use: [
        pngquant(),
        imageminSvgo(),
        imageminOptipng({optimizationLevel: 7}),
        imageminJpegtran({progressive: true})
      ],
      svgoPlugins: [
        { removeViewBox: false }, // don't remove the viewbox atribute from the SVG
        { removeUselessStrokeAndFill: false }, // don't remove Useless Strokes and Fills
        { removeEmptyAttrs: false } // don't remove Empty Attributes from the SVG
      ]
    })))
    .pipe(gulp.dest('./public/login'))
})
