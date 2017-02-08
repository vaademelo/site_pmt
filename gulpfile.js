var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require("gulp-autoprefixer"),
    minifycss = require("gulp-minify-css"),
    rename = require("gulp-rename"),
    ext_replace = require("gulp-ext-replace"),
    jade = require("gulp-jade"),
    minify = require('gulp-minify'),
    charset = require('gulp-charset');

gulp.task("templates", function(){

  var YOUR_LOCALS = {lang: "en"};

  gulp.src("app/**/index.jade")
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('../deploy/en/'));

  YOUR_LOCALS = {lang: "pt_br"};

  // Then the english language version.
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
  ['templates','sass'];
  gulp.watch("app/**/*.jade", ['templates']);
  gulp.watch("app/**/*.sass", ['sass']);
  gulp.watch("app/**/*.js",   ['js']);
});

gulp.task('js', function() {
  gulp.src('app/assets/javascript/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        }
    }))
    .pipe(gulp.dest('../deploy/assets/js/'))
});

gulp.task('default', ['templates','sass'])
