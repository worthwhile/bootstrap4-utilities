var tilde_importer = require('grunt-sass-tilde-importer');

module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourceMap: true,
          importer: tilde_importer,
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['utilities.scss'],
            dest: 'dist/',
            ext: '.css',
          },
        ],
      }
    },
    watch: {
      css: {
        files: 'src/**/*.*',
        tasks: ['sass'],
        options: {
          spawn: false,
          livereload: true
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['sass','watch']);
};
