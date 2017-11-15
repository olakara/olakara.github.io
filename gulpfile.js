var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var jsFiles = ['assets/js/jquery.min.js','assets/js/app.js'];
var jsDestination = 'assets/js';

gulp.task('scripts', function() {
    
    return gulp.src(jsFiles)
            .pipe(concat('scripts.js'))
            .pipe(gulp.dest(jsDestination))
            .pipe(rename('scripts.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(jsDestination));
    
  });