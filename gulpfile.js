var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var replace = require('gulp-string-replace');
var fs = require('fs');
var del = require('del');

// TODO: Minify PNG, JPG, GLTF

gulp.task('build', ['clean', 'inlineAndMinify', 'copyAssets', 'copyJsLibs']);

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('inlineAndMinify', ['clean'], function() {
  var htmlminOptions = {
    collapseWhitespace: true,
    minifyJS: true,
    removeComments: true
  };

  return gulp.src('src/*.html')
    .pipe(replace(/<script src=\"(js\/app.js)\"><\/script>/, function(replacement, p1) {
      return '<script>' + fs.readFileSync('src/' + p1, 'utf-8') + '</script>'
    }))
    .pipe(replace(/<script src=\"(js\/components\/[\w-\/.]+)\"><\/script>/g, function(replacement, p1) {
      return '<script>' + fs.readFileSync('src/' + p1, 'utf-8') + '</script>'
    }))
    .pipe(htmlmin(htmlminOptions))
    .pipe(gulp.dest('dist'));
});

gulp.task('copyAssets', ['clean'], function() {
  return gulp.src('src/assets/**')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('copyJsLibs', ['clean'], function() {
  return gulp.src('src/js/lib/**')
    .pipe(gulp.dest('dist/js/lib'));
})