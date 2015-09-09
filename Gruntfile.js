/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    grunt.initConfig({
        less: {
            dev: {
                //files: {
                //    "css/main.css": "less/main.less"
                //}
                files: [{
                    expand: true,
                    src: ['less/*.less'],
                    dest: 'css',
                    ext: '.css'
                }]
            },
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            dev: {
                files: [{
                    expand: true,
                    src: ['css/*.css'],
                    dest: 'css',
                }]
            },
        }
    });


    // Default task.
    grunt.registerTask('less-autoprefix', [
        'less:dev',
        'autoprefixer:dev'
    ]);
};