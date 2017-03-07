var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');

// TODO: Minify PNG, JPG, GLTF

gulp.task('build', ['minifyhtml', 'minifyjs', 'copy']);

gulp.task('minifyhtml', function() {
  var htmlminOptions = {
    collapseWhitespace: true,
    minifyJS: true,
    removeComments: true
  };

  return gulp.src('src/*.html')
    .pipe(htmlmin(htmlminOptions))
    .pipe(gulp.dest('dist'));
});

gulp.task('minifyjs', function() {
  var uglifyOptions = {
    mangle: false
  };

  return gulp.src(['src/js/**/*.js', '!src/js/**/lib/**'])
    .pipe(uglify(uglifyOptions))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  return gulp.src('src/assets/**')
    .pipe(gulp.dest('dist/assets'));
});