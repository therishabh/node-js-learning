var minifyCSS = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
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


var adminJsPath = {
    'vendor': [
        './bower_components/angular/angular.js',
        './bower_components/angular-route/angular-route.js',
        './bower_components/angular-sanitize/angular-sanitize.js',
        './bower_components/angular-animate/angular-animate.js',
        './bower_components/angular-touch/angular-touch.js',
        './bower_components/jquery/dist/jquery.js',
        './bower_components/bootstrap/dist/scripts/bootstrap.js'
    ],
    'app': [
        './public/admin/scripts/**/**/*.js'
    ]
};

var adminCcsPath = {
    'vendor': [
        './bower_components/angular/angular-csp.css',
        './bower_components/bootstrap/dist/css/bootstrap.css',
        './bower_components/font-awesome/css/font-awesome.css'
    ],
    'app': [
        './public/core/styles/**/**/**/*.scss',
        './public/admin/styles/**/**/**/*.scss'
    ]
};
var adminJadePath = ['./public/admin/pages/**/**/**/*.jade'];


var userJsPath = {
    'vendor': [
        './bower_components/angular/angular.js',
        './bower_components/angular-route/angular-route.js',
        './bower_components/angular-sanitize/angular-sanitize.js',
        './bower_components/angular-animate/angular-animate.js',
        './bower_components/angular-touch/angular-touch.js',
        './bower_components/jquery/dist/jquery.js',
        './bower_components/bootstrap/dist/js/bootstrap.js'
    ],
    'app': [
        './public/user/scripts/**/**/*.js'
    ]
};

var userCcsPath = {
    'vendor': [
        './bower_components/angular/angular-csp.css',
        './bower_components/bootstrap/dist/css/bootstrap.css',
        './bower_components/font-awesome/css/font-awesome.css'
    ],
    'app': [
        './public/core/styles/**/**/**/*.scss',
        './public/user/styles/**/**/**/*.scss'
    ]
};

var userJadePath = ['./public/user/pages/**/**/**/*.jade'];



var fontPath = [
    './public/core/fonts/**/**/*.*'
];


//=============
// Admin JS
//=============
//vendor javascript compile and minified
gulp.task('admin-scripts-vendor', function() {
    gulp.src(adminJsPath.vendor)
        .pipe(plumber({
            errLogToConsole: true,
            errorHandler: notify.onError({
                "title": "Javascript Error",
                "message": "Javascript Error"
            })
        }))
        .pipe(uglify())
        .pipe(concat('vendor.min.js'))
        .pipe(jsValidate())
        .on("error", console.log)
        .pipe(gulp.dest('./www/admin/scripts/'));
});

//app javascript compile and minified
gulp.task('admin-js-app', function() {
    gulp.src(adminJsPath.app)
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
    gulp.src('./public/admin/styles/style.scss')
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
// Admin HTML Move
// TODO
//=============
gulp.task('admin-html', function() {
    gulp.src('./public/admin/pages/**/**/**/*.html')
        .pipe(gulp.dest('./www/admin/pages/'));
});
//=============
// Admin Jade Compile
//=============
gulp.task('admin-jade', function() {


        gulp.src('./public/admin/pages/**/**/**/!(_)*.jade')

    var static = gulp.src('./public/admin/pages/**/**/**/!(_)*.jade')
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




//=============
// user JS
//=============
//vendor javascript compile and minified
gulp.task('user-js-vendor', function() {
    gulp.src(userJsPath.vendor)
        .pipe(plumber({
            errLogToConsole: true,
            errorHandler: notify.onError({
                "title": "Javascript Error",
                "message": "Javascript Error"
            })
        }))
        .pipe(uglify())
        .pipe(concat('vendor.min.js'))
        .pipe(jsValidate())
        .on("error", console.log)
        .pipe(gulp.dest('./www/user/js/'));
});

//app javascript compile and minified
gulp.task('user-js-app', function() {
    gulp.src(userJsPath.app)
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
    gulp.src('./public/user/styles/style.scss')
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
    gulp.src('./public/user/pages/**/**/**/*.jade')
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
    gulp.src('./public/core/images/**/**/**/*.*')
        .pipe(gulp.dest('./www/core/images/'));
});



gulp.task('browser-sync', ['nodemon'], function() {
    browserSync({
        proxy: "localhost:8000", // local node app address
        port: 3000, // use *different* port than above
        notify: false
    });
});

gulp.task('nodemon', function(cb) {
    var called = false;
    return nodemon({
            script: 'server/app.js',
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
            gulp.src('server/app.js')
                .pipe(notify('Reloading page, please wait...'));
        });
});



gulp.task('default', [
    'browser-sync',
    'admin-scripts-vendor',
    'admin-js-app',
    'admin-css-vendor',
    'admin-css-app',
    'admin-html',
    'admin-jade',
    'user-js-vendor',
    'user-js-app',
    'user-css-vendor',
    'user-css-app',
    'user-jade',
    'fonts',
    'core-images'
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

    gulp.watch(['server/**/**/*.js'], reload);
    gulp.watch(['./www/admin/css/*.scss'], reload);
    gulp.watch(['./www/admin/scripts/*.js'], reload);
    gulp.watch(['./www/admin/js/*.js'], reload);
    gulp.watch(['./www/admin/pages/**/*.html'], reload);
    gulp.watch(['./www/user/css/*.scss'], reload);
    gulp.watch(['./www/user/js/*.js'], reload);
    gulp.watch(['./www/user/pages/**/*.html'], reload);
});



// var port=process.env.PORT || config.defaultPort;


// gulp.task('vet',function () {

//     log('analysing with jshint and jscs');
//     return gulp
//         .src(config.alljs)
//         .pipe($.if(args.verbose,$.print()))
//         .pipe($.jscs())
//         .pipe($.jshint())
//         .pipe($.jshint.reporter('jshint-stylish',{verbose:true}))
//         .pipe($.jshint.reporter('fail'));
// });

// gulp.task('inject-index',function () {

//     return gulp
//         .src(config.client+'index.html')
//         .pipe($.inject(gulp.src(config.scripts),{relative:true}))
//         .pipe(gulp.dest(config.client))
// });

// gulp.task('wiredep',function () {

//     var options=config.getWiredepDefaultOptions();
//     var wiredep=require('wiredep').stream;

//     return gulp
//         .src(config.client+'*.html')
//         .pipe(wiredep(options))
//         .pipe($.inject(gulp.src(config.scripts),{relative:true}))
//         .pipe(gulp.dest(config.client))
// });



// gulp.task('styles',function () {
//     log('Compiling less to css');
//     return gulp
//         .src(config.scss)
//         .pipe($.sass())
//         .on('error',errorHandler)
//         .pipe($.autoprefixer({browsers:['last 2 version','> 5%']}))
//         .pipe(gulp.dest(config.css));
// });

// gulp.task('inject',['styles','wiredep','inject-index'],function () {

//     return gulp
//         .src(config.client+'index.html')
//         .pipe($.inject(gulp.src(config.css+'admin.main.css'),{relative:true}))
//         .pipe(gulp.dest(config.client))
// });

// gulp.task('serve-dev',['inject'],function () {
//     var isDev=true;
//     var nodeOptions={
//         script:config.nodeServer,
//         delayTime:1,
//         env:{
//             'PORT':port,
//             'NODE_ENV':isDev?'dev':'build'
//         },
//         watch:[config.server] //files to be watched for restarting the app.scripts
//     };

//     return $.nodemon(nodeOptions)
//         .on('restart',function (ev) {
//             log('***nodemon restarted');
//             log('files changed on restart:\n'+ev);
//             setTimeout(function () {
//                 browserSync.notify('reloading now...');
//                 browserSync.reload({stream:false});
//             },1000);
//         })
//         .on('start',function () {
//             log('starting ***** nodemon');
//             startBrowserSync();
//         })
//         .on('crash',function () {
//             log('***nodemon crashed due to some file error');
//         })
//         .on('exit',function () {
//             log('***nodemon exited');
//         })
// });

// gulp.task('help',function () {
//     $.taskListing();
// });

// gulp.task('default',['help']);

// function log(msg) {
//     $.util.log($.util.colors.black(msg));
// }


// function startBrowserSync(){

//     var watchFiles=[config.scss,config.scripts,config.dashboard,config.index,config.styles];

//     if(browserSync.active){
//         return
//     }
//     log('starting ***** nodemon');
//     gulp.watch(watchFiles,['inject'],function () {
//         log('file changed');
//     });

//     var options={
//         proxy:'localhost:' +port,
//         port:3000,
//         files:[config.client+'**/*.*'],
//         ghostMode:{
//             clicks:true,
//             location:false,
//             forms:true,
//             scroll:true
//         },
//         injectChanges:true,
//         logFileChanges:true,
//         logLevel:'debug',
//         logPrefix:'gulp-patterns',
//         notify:true,
//         reloadDelay:0
//     };
//     console.log('starting ***** nodemon')
//     browserSync(options);
//     console.log('starting ***** nodemon')
// }

// function errorHandler(error) {
//     log('**** start of error****');
//     log(error);
//     log('**** end of error****');
//     this.emit('end');
// }
// gulp.task('watcher',function () {
//     gulp.watch([config.less],['styles']);
// });


// gulp.task('templateCache',['clean-code'],function () {
//     log('Creating AngularJs cache....');
//
//     return gulp
//         .src(config.htmltemplates)
//         .pipe($.minifyHtml({empty:true}))
//         .pipe($.angularTemplatecache(
//             config.templateCache.file,
//             config.templateCache.options
//         ))
//         .pipe(gulp.dest(config.temp));
// });

// gulp.task('inject',['wiredep','styles','templateCache'],function () {
//
//     return gulp
//         .src(config.index)
//         .pipe($.inject(gulp.src(config.css)))
//         .pipe(gulp.dest(config.client))
// });



// gulp.task('optimize',['inject'],function () {
//     log('optimizing the javascript,css,html');
//
//     var templateCache=config.temp + config.templateCache.file;
//     var assets=$.useref.assets({searchpath:'./'});
//     return gulp
//         .src(config.index)
//         .pipe($.inject(gulp.src(templateCache,{read:false}),
//             {
//                 starttag:'<!--inject:templates:scripts-->'
//             }))
//         .pipe(assets)
//         .pipe(assets.restore())
//         .pipe(gulp.dest(config.build));
//
// });


// gulp.task('fonts',['clean-fonts'],function () {
//     log('copying fonts ..... into the build folder');
//     return  gulp
//         .src(config.fonts)
//         .pipe(gulp.dest(config.build + 'fonts'));
// });

// gulp.task('images',['clean-images'],function () {
//     log('copying images and optimizing ..... into the build folder');
//     return  gulp
//         .src(config.images)
//         .pipe($.imagemin({optimizationLevel:4}))
//         .pipe(gulp.dest(config.build + 'images'));
// });

// gulp.task('clean-fonts',function () {
//     clean(config.build+'fonts/**/*.*');
// });


// gulp.task('clean-images',function () {
//     clean(config.build+'images/**/*.*');
// });
//
// gulp.task('clean-styles',function () {
//     clean(config.temp +"**/*.css")
// });

// gulp.task('clean',function () {
//     var delFiles=[].concat(config.temp,config.build);
//     log('cleaning' + $.util.colors.blue(delFiles));
//     del(delFiles);
// });

// gulp.task('clean-code',function () {
//     var files=[].concat(
//         config.temp + '**/*.scripts'
//         ,config.build + '**/*.html'
//         ,config.build + 'scripts/**/*.scripts');
//
//     log('cleaning' + $.util.colors.blue(files));
//     clean(files);
// });


//



// function clean(path) {
//     log('Cleaning: '+ $.util.colors.yellow(path));
//     del(path);
//
// }

