var gulp = require('gulp');

var requireDir = require('require-dir');
var tasks = requireDir('./gulp-tasks');

gulp.task('user', [
    'user-js',
    'user-css',
    'user-jade',
    'user-fonts',
    'user-images',
    'user-browser-sync',
    'user-nodemon',
    'user-watch'
]);

gulp.task('admin', [
]);
