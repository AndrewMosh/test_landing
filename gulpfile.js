const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const minify = require("gulp-minify-css");
const uglify = require("gulp-uglify");

// Пути к файлам
const paths = {
    html: {
        src: "src/**/*.html",
        dest: "dist/",
    },
    css: {
        src: "src/css/**/*.css",
        dest: "dist/css/",
    },
    js: {
        src: "src/js/**/*.js",
        dest: "dist/js/",
    },
};

// Копирование и минификация HTML файлов
function html() {
    return gulp.src(paths.html.src).pipe(gulp.dest(paths.html.dest)).pipe(browserSync.stream());
}

// Копирование, минификация и перезагрузка CSS файлов
function css() {
    return gulp
        .src(paths.css.src)
        .pipe(minify()) // минификация CSS
        .pipe(gulp.dest(paths.css.dest))
        .pipe(browserSync.stream());
}

// Копирование, минификация и перезагрузка JavaScript файлов
function js() {
    return gulp
        .src(paths.js.src)
        .pipe(uglify()) // минификация JavaScript
        .pipe(gulp.dest(paths.js.dest))
        .pipe(browserSync.stream());
}

// Отслеживание изменений в файлах
function watch() {
    browserSync.init({
        server: {
            baseDir: "./dist",
        },
    });
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.css.src, css);
    gulp.watch(paths.js.src, js);
}

// Задача по умолчанию
exports.default = gulp.series(gulp.parallel(html, css, js), watch);
