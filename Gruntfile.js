'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    blanket_mocha: {
      options: {
        run: true,
        reporter: 'Min',
        threshold: 70
      },
      files: {
        src: 'test/*.html'
      }
    }
  });

  grunt.registerTask('default', ['blanket_mocha']);

};
