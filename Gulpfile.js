/**
 * Created by nikolai on 10/21/16.
 */
var gulp        = require('gulp');
var jshint      = require('gulp-jshint');
var rimraf      = require('gulp-rimraf');
var env         = require('gulp-env');
var runSequence = require('run-sequence');
var istanbul    = require('gulp-istanbul');
var isparta     = require('isparta');
var mocha       = require('gulp-mocha-co');

gulp.task('clean', function () {
    return gulp.src(['.coverdata', '.debug', '.coverrun'], {read: false})
        .pipe(rimraf());
});

gulp.task('lint', ['clean'], function () {
    return gulp.src(['**/*.js', '!**/node_modules/**', '!**/server/migration/**', '!coverage/**/*.js'])
        .pipe(jshint({lookup: true}))
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('set_unit_env_vars', function () {
    var MYSQL_ROOT_PASSWORD = process.env.MYSQL_ROOT_PASSWORD;
    var MYSQL_USER = process.env.MYSQL_USER;
    var MYSQL_HOST = process.env.MYSQL_HOST;
    var MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
    var MYSQL_DATABASE = process.env.MYSQL_DATABASE;
    env({
        vars: {
            MYSQL_ROOT_PASSWORD: MYSQL_ROOT_PASSWORD,
            MYSQL_USER: MYSQL_USER,
            MYSQL_PASSWORD: MYSQL_PASSWORD,
            MYSQL_DATABASE: MYSQL_DATABASE,
            MYSQL_HOST: MYSQL_HOST
        }
    });
});

gulp.task('unit_pre', function () {
    return gulp.src(['**/*.js', '!index.js', '!**/*.spec.js', '!**/node_modules/**/*.js', '!.debug/**/*.js', '!gulpfile.js', '!coverage/**/*.js'])
        .pipe(istanbul({ // Covering files
            instrumenter: isparta.Instrumenter,
            includeUntested: true
        }))
        .pipe(istanbul.hookRequire()) // Force `require` to return covered files
        .on('finish', function () {
            gulp.src(['**/*.unit.spec.js', '!**/node_modules/**/*.js'], {read: false})
                .pipe(mocha({reporter: 'spec', timeout: '10000'}))
                .pipe(istanbul.writeReports({
                    reporters: ['lcov'],
                    reportOpts: {dir: 'coverage'}
                }))
                .once('end', function () {
                    process.exit();
                });
        });
});

gulp.task('unit_test', function (callback) {
    runSequence('set_unit_env_vars',
        'unit_pre',
        callback);
});
