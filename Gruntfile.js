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
    },

    karma: {
      options: {
        configFile: 'karma.conf.js',
        files: [
          // not sure why these files are inlcuded
          'node_modules/chai/chai.js',
          'node_modules/sinon-chai/lib/sinon-chai.js',
          'node_modules/sinon/pkg/sinon.js',
          // source and test files
          'js/calculator.js',
          'test/calculator-test.js',
          // html fixture, html2js preprocessor converts this to JS string
          'test/index.html'
        ]
      },

      dev: {
        // local testing, test all / main browser environments
        browsers: ['Safari', 'PhantomJS']
      },

      prod: {
        singleRun: true,
        browsers: ['PhantomJS']
      }
    }
  });

  grunt.registerTask('default', ['blanket_mocha']);

};
