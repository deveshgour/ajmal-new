!(function () {
    'use strict';
    module.exports = function (grunt) {
        var vendorFiles, cssFiles;
        const sass = require('node-sass');
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            sass: {
                dist: {
                    files: [
                        {
                            expand: true,
                            cwd: 'scss',
                            src: ['*.scss'],
                            dest: 'css',
                            ext: '.min.css'
                        }],
                },
                options: {
                    implementation: sass,
                    sourceMap: true,
                    outputStyle: 'compressed',
                },
            },

            watch: {
                sass: {
                    files: [
                        'scss/***/*.scss',
                        'scss/**/*.scss',
                        'scss/*/*.scss',
                        'scss/*.scss',
                        ['Gruntfile.js']],
                    tasks: ['sass']
                },
            }

        });


        grunt.loadNpmTasks('grunt-sass');
        grunt.loadNpmTasks('grunt-contrib-watch');
        // Default task(s).
        grunt.registerTask('default', ['sass', 'watch']);

    };
})();

