'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        'assets/js/plugins/*.js',
        '!assets/js/scripts.min.js'
      ]
    },
    'json-minify': {
      build: {
        files: '_data/articles.json'
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
//            'assets/js/plugins/*.js',
//grunts gives a weird Uglification failed using var if search.js is included, so I'm not including it as part of scripts.min.js
            'assets/js/plugins/jquery*.js',
            'assets/js/plugins/respon*.js',
            'assets/js/_*.js'
          ]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'images/'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.svg',
          dest: 'images/'
        }]
      }
    },
    sass: {
      dist: {
        files: {
          'test/main.css': 'assets/css/main.scss'
        }
      }
    },
    watch: {
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['uglify']
      }
    },
    clean: {
      dist: [
        'assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
<<<<<<< Updated upstream
  grunt.loadNpmTasks('grunt-json-minify');
=======
  grunt.loadNpmTasks('grunt-contrib-sass');
>>>>>>> Stashed changes

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'uglify',
    'imagemin',
<<<<<<< Updated upstream
    'json-minify',
=======
    'sass',
>>>>>>> Stashed changes
    'svgmin'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};