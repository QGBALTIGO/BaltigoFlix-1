// Iniciar
// npm install

// Adiciona os módulos instalados
const gulp = require('gulp');
const cssMin = require('gulp-cssmin');
const cssComments = require('gulp-strip-css-comments');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Função para minificar, remover comentários e adicionar prefixos no CSS
function minifyCSS() {
  return gulp
    .src('css/modules/*.css')
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('style.min.css'))
    .pipe(cssComments({ all: true }))
    .pipe(cssMin())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

// Função para juntar e minificar o JS
function gulpJS() {
  return gulp
    .src('js/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

// Função para iniciar o servidor no navegador
function browser() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}

// Função de watch do Gulp
function watch() {
  gulp.watch('css/modules/*.css', minifyCSS);
  gulp.watch('js/scripts/*.js', gulpJS);
  gulp.watch(['*.html']).on('change', browserSync.reload);
}

// Tarefa padrão do Gulp
exports.minifyCSS = minifyCSS;
exports.gulpJS = gulpJS;
exports.browser = browser;
exports.watch = watch;
exports.default = gulp.parallel(watch, browser, minifyCSS, gulpJS);
