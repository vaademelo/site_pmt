var gulp = require('gulp'),
  sass = require('gulp-ruby-sass');
    
gulp.task('sass', function(){
  sass('app/**/*.sass')
      .on('error', sass.logError)
      .pipe(gulp.dest('deploy/assets/css'));
});