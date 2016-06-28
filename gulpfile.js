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
    reload = browserSync.reload;


var adminJsPath = [
    './client/_core/vendor/angular/angular.js',
    '/client/_core/vendor/angular-ui-router/release/angular-ui-router.js',
    './client/_core/vendor/angular-sanitize/angular-sanitize.js',
    './client/_core/vendor/angular-animate/angular-animate.js',
    './client/_core/vendor/angular-touch/angular-touch.js',
    './client/_core/vendor/material-design-lite/material.min.js',
    './client/admin/scripts/**/**/*.js'
];

var adminCcsPath = {
    'vendor': [
        './client/_core/vendor/angular/angular-csp.css',
        './client/_core/vendor/font-awesome/css/font-awesome.css',
        './client/_core/vendor/material-design-lite/material.min.css'
    ],
    'app': [
        './client/core/styles/**/**/**/*.scss',
        './client/admin/styles/**/**/**/*.scss'
    ]
};
var adminJadePath = ['./client/admin/pages/**/**/**/*.jade'];


var userJsPath = [
    './client/_core/vendor/jquery/dist/jquery.js',
    './client/_core/vendor/material-design-lite/material.js',
    './client/user/scripts/**/**/*.js'
];

var userCcsPath = {
    'vendor': [
        './client/_core/vendor/angular/angular-csp.css',
        './client/_core/vendor/material-design-lite/material.min.css',
        './client/_core/vendor/font-awesome/css/font-awesome.css'
    ],
    'app': [
        './client/core/styles/**/**/**/*.scss',
        './client/user/styles/**/**/**/*.scss'
    ]
};

var userJadePath = ['./client/user/pages/**/**/**/*.jade'];



var fontPath = [
    './client/core/fonts/**/**/*.*'
];


//=============
// Admin JS
//=============

//app javascript compile and minified
gulp.task('admin-js-app', function() {
    gulp.src(adminJsPath)
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
    gulp.src(adminCcsPath.vendor)
        .pipe(minifyCSS())
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest('./www/admin/css/'));
});

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



//app javascript compile and minified
gulp.task('user-js-app', function() {
    gulp.src(userJsPath)
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
        .pipe(gulp.dest('./www/user/js/'));
});


// user CSS
//=============
//vendor css compile and minified
gulp.task('user-css-vendor', function() {
    gulp.src(userCcsPath.vendor)
        .pipe(minifyCSS())
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest('./www/user/css/'));
});

//app scss compile 
gulp.task('user-css-app', function() {
    gulp.src('./client/user/styles/style.scss')
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


//=============
// user Jade Compile
//=============
gulp.task('user-jade', function() {
    gulp.src('./client/user/pages/**/**/**/*.jade')
        .pipe(gulp.dest('./www/user/pages/'));
});


//=============
// Core Fonts Move
//=============
gulp.task('fonts', function() {
    gulp.src(fontPath)
        .pipe(gulp.dest('./www/core/fonts/'));
});

//=============
// Core images Move
//=============
gulp.task('core-images', function() {
    gulp.src('./client/core/images/**/**/**/*.*')
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
        // .pipe(htmlmin({ collapseWhitespace: true }))
        .on("error", console.log)
        .pipe(gulp.dest('./www/core/pages/'));
});



gulp.task('browser-sync', ['nodemon'], function() {
    browserSync({
        proxy: "localhost:6001", // local node app address
        port: 3000, // use *different* port than above
        notify: false
    });
});

gulp.task('nodemon', function(cb) {
    var called = false;
    return nodemon({
            script: 'server/server.js',
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
            gulp.src('server/server.js')
                .pipe(notify('Reloading page, please wait...'));
        });
});



gulp.task('default', [
    'browser-sync',
    'admin-js-app',
    'admin-css-vendor',
    'admin-css-app',
    'admin-jade',
    'user-js-app',
    'user-css-vendor',
    'user-css-app',
    'user-jade',
    'fonts',
    'core-images',
    'core-jade'
], function() {

    gulp.watch(adminCcsPath.app, function() {
        gulp.run('admin-css-app');
    });

    gulp.watch(adminJadePath, function() {
        gulp.run('admin-jade');
    });

    gulp.watch(userJadePath, function() {
        gulp.run('user-jade');
    });

    gulp.watch(adminJsPath.app, function() {
        gulp.run('admin-js-app');
    });

    gulp.watch(userCcsPath.app, function() {
        gulp.run('user-css-app');
    });

    gulp.watch(userJadePath, function() {
        gulp.run('user-jade');
    });

    gulp.watch(userJsPath.app, function() {
        gulp.run('user-js-app');
    });

    gulp.watch(['./client/**/**/**/*.jade'], reload);
    // gulp.watch(['./server/**/**/*.js'], reload);
    // gulp.watch(['./www/admin/css/*.scss'], reload);
    // gulp.watch(['./www/admin/scripts/*.js'], reload);
    // gulp.watch(['./www/admin/js/*.js'], reload);
    // gulp.watch(['./www/user/css/*.scss'], reload);
    // gulp.watch(['./www/admin/pages/**/*.html'], reload);
});
