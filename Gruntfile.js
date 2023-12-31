const { config } = require("grunt");
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      cssmin: config('cssmin'),
      validation: {
        options: {
          doctype: 'HTML5'
        },
        files: {
          src: ['./*.html']
        }
      },
      cssmin: {
        target: {
          files: {
            'core.bundle.css': ['css/**/*.css', 'css/*.css']
          }
        }
      },
      watch: {
        stylesheets: { 
          files: ['css/**/*.css', 'css/*.css'],
          tasks: ['cssmin'],
          livereload: true
        },
      },
    });
  
    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-w3c-html-validation')
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['cssmin', 'watch']);
  };