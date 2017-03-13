var gulp = require('gulp');
var fs = require('fs');
var del = require('del');
var replace = require('gulp-string-replace');
var eslint = require('gulp-eslint');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

gulp.task('build',
          ['clean', 'lint', 'inlineAndMinify', 'minImages',
           'copyAssets', 'copyJsLibs']);

/**
 * Cleans out dist in prep for build.
 */
gulp.task('clean', function() {
  return del(['dist']);
});

/**
 * Lints all JS except third-party libs
 */
gulp.task('lint', function() {
  var eslintOptions = {
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always']
    }
  };

  return gulp.src(['src/js/**/*.js', '!src/js/lib/**'])
    .pipe(eslint(eslintOptions))
    .pipe(eslint.failOnError());
});

/**
 * Inlines JS into HTML and minifies JS and HTML
 */
gulp.task('inlineAndMinify', ['clean'], function() {
  var htmlminOptions = {
    collapseWhitespace: true,
    minifyJS: true,
    removeComments: true
  };

  var replaceOptions = {
    logs: {
      enabled: false
    }
  };

  return gulp.src('src/*.html')
    .pipe(replace(/<script src=\"(js\/[\w-\/.]+)\"><\/script>/g,
        function(replacement, p1) {
          return '<script>' + fs.readFileSync('src/' + p1, 'utf-8') +
                 '</script>';
        }, replaceOptions))
    .pipe(htmlmin(htmlminOptions))
    .pipe(gulp.dest('dist'));
});

/**
 * Minifies all images
 */
gulp.task('minImages', ['clean'], function() {
  return gulp.src('src/assets/**/*.*(png|jpg)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets'));
});

/**
 * Copies remaining assets not handled in other tasks.
 */
gulp.task('copyAssets', ['clean'], function() {
  return gulp.src(['src/assets/**', '!src/assets/**/*.*(png|jpg)'])
    .pipe(gulp.dest('dist/assets'));
});

/**
 * Copies remaining JS not handled in other tasks.
 */
gulp.task('copyJsLibs', ['clean'], function() {
  return gulp.src('src/js/lib/**')
    .pipe(gulp.dest('dist/js/lib'));
});