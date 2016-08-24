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


var paths = {
    user: {
        css: ['../client/**/**/**/**/**/*.scss'],
        js: ['./client/user/**/**/**/*.js',
            './client/user/**/**/**/*.jsx'
        ],
        html: [],
        images: []
    },
    admin: {
        css: {
            vendor: ['./client/_core/vendor/angular/angular-csp.css'],
            app: ['./client/_core/styles/**/**/**/*.scss',
                './client/admin/**/**/**/**/*.scss'
            ]
        },
        js: ['./client/_core/vendor/angular/angular.js',
            '/client/_core/vendor/angular-ui-router/release/angular-ui-router.js',
            './client/_core/vendor/angular-sanitize/angular-sanitize.js',
            './client/_core/vendor/angular-animate/angular-animate.js',
            './client/_core/vendor/angular-touch/angular-touch.js',
            './client/admin/scripts/**/**/*.js'
        ],
        html: ['./client/admin/pages/**/**/**/*.jade',
            './client/_core/pages/**/**/**/*.jade'
        ],
        images: []
    },
    fonts: ['./client/_core/fonts/**/**/*.*']
};


//==================SERVER=====================================

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync({
        proxy: "localhost:6001", // local node app address
        port: 7000, // use *different* port than above
        notify: false
    });
});

gulp.task('nodemon', function(cb) {
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

//==================USER=======================================

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

// user CSS
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


// user Jade
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

// user Images
//=============
gulp.task('user-images', function() {
    gulp.src('./client/_core/images/**/**/**/*.*')
        .pipe(gulp.dest('./www/core/images/'));
});

gulp.task('user-watch', function() {

    console.log('user-watch');

    gulp.watch(paths.user.css, ['user-css']);

    gulp.watch(paths.user.js, ['user-js']);

    gulp.watch(['./client/**/**/**/*.jade'], reload);
    gulp.watch(['./server/**/**/*.js'], reload);
    gulp.watch(['./www/user/css/*.css'], reload);
    gulp.watch(['./www/user/js/*.js'], reload);
});

//==================ADMIN=======================================

//=============
// Admin JS
//=============

//app javascript compile and minified
gulp.task('admin-js', function() {
    gulp.src(paths.admin.js)
        .pipe(plumber({
            errLogToConsole: true,
            errorHandler: notify.onError({
                "title": "Javascript Error",
                "message": "Javascript Error"
            })
        }))
        // .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(jsValidate())
        .on("error", console.log)
        .pipe(gulp.dest('./www/admin/scripts/'));
});


//=============
// Admin CSS
//=============
//vendor css compile and minified
gulp.task('admin-css-vendor', function() {
    gulp.src(paths.admin.css.vendor)
        .pipe(minifyCSS())
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest('./www/admin/css/'));
});

//=============
// Admin SCSS
//=============
//app scss compile 
gulp.task('admin-css-app', function() {
    gulp.src('./client/admin/styles/style.scss')
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
        .pipe(gulp.dest('./www/admin/css/'));
});


//=============
// Admin Jade Compile
//=============
gulp.task('admin-jade', function() {

    var static = gulp.src('./client/admin/pages/**/**/**/!(_)*.jade')
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
        .pipe(gulp.dest('./www/admin/pages/'));
});


//==================================CORE==========================

//=============
// Core Fonts Move
//=============
gulp.task('core-fonts', function() {
    gulp.src(paths.fonts)
        .pipe(gulp.dest('./www/core/fonts/'));
});

//=============
// Core Images Move
//=============
gulp.task('core-images', function() {
    gulp.src('./client/_core/images/**/**/**/*.*')
        .pipe(gulp.dest('./www/core/images/'));
});

//=============
// Core Jade Compile
//=============
gulp.task('core-jade', function() {

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
        //.pipe(htmlmin({ collapseWhitespace: true }))
        .on("error", console.log)
        .pipe(gulp.dest('./www/core/pages/'));
});

gulp.task('admin-watch', function() {

    gulp.watch(paths.admin.css.app, function() {
        gulp.run('admin-css-app');
    });

    gulp.watch(paths.admin.html, function() {
        gulp.run('admin-jade');
    });


    gulp.watch(paths.admin.js, function() {
        gulp.run('admin-js');
    });

    gulp.watch(['./client/**/**/**/*.jade'], reload);
    gulp.watch(['./server/**/**/*.js'], reload);
    gulp.watch(['./www/admin/css/*.css'], reload);
    gulp.watch(['./www/admin/scripts/*.js'], reload);
    gulp.watch(['./www/admin/js/*.js'], reload);
    gulp.watch(['./www/admin/pages/**/*.html'], reload);
});
