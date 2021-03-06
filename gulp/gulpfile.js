var gulp = require('gulp');
var requireDir = require('require-dir');
var gulpSequence = require('gulp-sequence');
var path = require('path');

/**
 * Path to the user-project-volume
 * Do not change.
 * @type {string}
 */
global.projectPath = '/home/gulp/project';
global.config = require(projectPath + '/gulp_config');

requireDir('./tasks', {recurse: true});
require(projectPath + '/gulpfile');

var buildDev = function(cb) {
    global.development = true;
    gulpSequence('build', cb);
};

gulp.task('build:dev', buildDev);