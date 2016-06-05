var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require("gulp-autoprefixer"),
    minifycss = require("gulp-minify-css"),
    rename = require("gulp-rename"),
    ext_replace = require("gulp-ext-replace"),
    jade = require("gulp-jade");

gulp.task("templates", function(){

  var YOUR_LOCALS = {};

  gulp.src("app/**/index.jade")
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('../deploy/'));
});

gulp.task('sass', function(){
  sass('app/assets/stylesheets/*.sass')
      .on('error', sass.logError)
      .pipe(autoprefixer("last 2 version"))
      .pipe(minifycss())
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest('../deploy/assets/css/'));
});

gulp.task("watch", function(){
  gulp.watch("app/**/*.jade", ['templates']);
  gulp.watch("app/**/*.sass", ['sass']);
});
