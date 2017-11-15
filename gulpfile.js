var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

var jsFiles = ['assets/js/jquery.min.js','assets/js/app.js'];
var jsDestination = 'assets/js';
var cssFiles = ['assets/css/bootstrap.css',
                'assets/css/app.css',
                'assets/css/colors.css',
                'assets/css/github.css',
                'assets/css/icomoon.css',
                'assets/css/controls.css'
              ];
var cssDestination = 'assets/css'

gulp.task('scripts', function() {
    
    return gulp.src(jsFiles)
            .pipe(concat('scripts.js'))
            .pipe(gulp.dest(jsDestination))
            .pipe(rename('scripts.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(jsDestination));
    
  });

gulp.task('styles', function() {

  return gulp.src(cssFiles)
          .pipe(concat('styles.css'))
          .pipe(gulp.dest(cssDestination))
          .pipe(rename('styles.min.css'))
          .pipe(minifyCSS())
          .pipe(gulp.dest(cssDestination));
});  

gulp.task('default', function() {
    gulp.run('styles');
    gulp.run('scripts');  
});