/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    grunt.initConfig({
        useminPrepare: {
            html: 'index.html'
        },
        usemin: {
            html: ['dist/index.html']
        },
        copy: {
            dist: {
                files: [{
                    src: ['index.html'],
                    dest: 'dist/',
                }, {
                    expand: true,
                    src: ['js/scrollspy-menu.js','js/show-contact.js'],
                    dest: 'dist/',
                }, {
                    expand: true,
                    src: ['bower_components/**/*'],
                    dest: 'dist/',
                }
                ]
            }
        },
        rev: {
            options: {
                algorithm: 'md5',
                length: 5
            },
            dist: {
                files: [{
                    src: [
                        'dist/js/*.min.js',
                        'dist/css/*.min.css'
                    ]
                }]
            }
        },
        clean: {
            dist: ["dist"],
            tmp: [".tmp"]
        },
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
                    sourceMap: true
                }
            },
            dist: {
                src: ['ts/**/*.ts'],
                dest: 'dist/js',
                options: {
                    module: 'umd', //or commonjs
                    target: 'es5', //or es3
                    sourceMap: false
                }
            }
        }
    });


    grunt.registerTask('less-autoprefix', [
        'less:dev',
        'autoprefixer:dev'
    ]);

    grunt.registerTask('dist', [
        'clean:dist',
        'less:dev',
        'autoprefixer:dev',
        'typescript:dist',
        'copy:dist',
        'useminPrepare',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'rev:dist',
        'usemin',
        'clean:tmp',
    ]);
};