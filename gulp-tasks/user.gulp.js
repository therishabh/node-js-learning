var minifyCSS = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    jsValidate = require('gulp-jsvalidate'),
    browserSync = require('browser-sync'),
    babelify = require('babelify'),
    reload = browserSync.reload,
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

var cssPath = [
    './client/**/styles/**/**/**/*.scss'
]

var jsPath = [
    './client/user/**/**/**/*.js',
    './client/user/**/**/**/*.jsx'
]

var fontPath = [
    './client/_core/fonts/**/**/*.*'
];


// user JS
//=============
gulp.task('user-js', function() {
    browserify({ entries: './client/user/scripts/app/app.module.jsx', extensions: ['.jsx'], debug: true })
        .transform('babelify', { presets: ['es2015', 'react'] })
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./www/user/js/'));
});

// App CSS
//=============
gulp.task('user-css', function() {
    gulp.src('./client/user/styles/client.scss')
        .pipe(plumber({
            errLogToConsole: true,
            errorHandler: notify.onError({
                "title": "Sass Error",
                "message": "Sass Error"
            })
        }))
        .pipe(sass())
        .on("error", console.log)
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('./www/user/css/'));
});


// App Jade
//=============
gulp.task('user-jade', function() {

    var index = gulp.src('./client/user/index.jade')
        .pipe(gulp.dest('./www/user/pages/'));

    var static = gulp.src('./client/_core/pages/**/**/**/!(_)*.jade')
        .pipe(plumber({
            errLogToConsole: true,
            errorHandler: notify.onError({
                "title": "Jade Error",
                "message": function(error) {
                    return error;
                }
            })
        }))
        .pipe(jade({
            pretty: true
        }))
        // .pipe(htmlmin({ collapseWhitespace: true }))
        .on("error", console.log)
        .pipe(gulp.dest('./www/core/pages/'));
});


// User Jade
//=============
gulp.task('user-fonts', function() {
    gulp.src(fontPath)
        .pipe(gulp.dest('./www/core/fonts/'));
});

// User Images
//=============
gulp.task('user-images', function() {
    gulp.src('./client/_core/images/**/**/**/*.*')
        .pipe(gulp.dest('./www/core/images/'));
});


gulp.task('user-browser-sync', ['user-nodemon'], function() {
    browserSync({
        proxy: "localhost:6001", // local node app address
        port: 7000, // use *different* port than above
        notify: false
    });
});

gulp.task('user-nodemon', function(cb) {
    var called = false;
    return nodemon({
            script: './server/server.js',
            ignore: [
                'gulpfile.js',
                'node_modules/'
            ]
        })
        .on('start', function() {
            if (!called) {
                called = true;
                cb();
            }
        })
        .on('restart', function() {
            setTimeout(function() {
                reload({ stream: false });
            }, 1000);
            gulp.src('./server/server.js')
                .pipe(notify('Reloading page, please wait...'));
        });
});


gulp.task('user-watch', function() {

    gulp.watch(cssPath.app, function() {
        gulp.run('user-css');
    });

    /*    gulp.watch(userJadePath, function() {
            gulp.run('user-jade');
        });*/

    gulp.watch(jsPath, function() {
        gulp.run('user-js');
    });

    gulp.watch(['./client/**/**/**/*.jade'], reload);
    gulp.watch(['./server/**/**/*.js'], reload);
    gulp.watch(['./www/user/css/*.css'], reload);
    gulp.watch(['./www/user/js/*.js'], reload);
});
