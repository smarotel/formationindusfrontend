/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    grunt.initConfig({
        watch: {
            less:{
                files: ['less/*.less'],
                tasks: ['less-autoprefix']
            },
            typescript:{
                files: ['ts/*.ts'],
                tasks: ['typescript']
            }
        },
        less: {
            dev: {
                //files: {
                //    "css/main.css": "less/main.less"
                //}
                files: [{
                    expand: true,
                    cwd: 'less',
                    src: ['*.less'],
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
                    src: ['css/*.css']
                }]
            },
        },
        typescript: {
            dev: {
                src: ['ts/**/*.ts'],
                dest: 'js',
                options: {
                    module: 'umd', //or commonjs
                    target: 'es5', //or es3
                    sourceMap: true,
                }
            }
        }
    });


    // Default task.
    grunt.registerTask('less-autoprefix', [
        'less:dev',
        'autoprefixer:dev'
    ]);

};