var gulp = require('gulp');

var requireDir = require('require-dir');
var tasks = requireDir('./gulp-tasks');

gulp.task('dev', [
    'nodemon',
    'user-js',
    'user-css',
    'user-jade',
    'user-images',
    'user-watch',
    'admin-js',
    'admin-css-vendor',
    'admin-css-app',
    'admin-jade',
    'core-fonts',
    'core-images',
    'core-jade'

]);

gulp.task('prod', [
]);
