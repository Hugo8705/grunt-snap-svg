module.exports = function(grunt) {

  //Initializing the configuration object
    grunt.initConfig({

    // Task configuration
    coffee: {
      compile: {
          files: {
            './src/assets/javascript/frontend.js': './src/assets/coffee/**/*.coffee', // 1:1 compile
            //'path/to/another.js': ['path/to/sources/*.coffee', 'path/to/more/*.coffee'] // compile and concat into single file
          }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      js_frontend: {
        src: [
          './bower_components/jquery/dist/jquery.min.js',
          './bower_components/Snap.svg/dist/snap.svg-min.js',
          './src/assets/javascript/frontend.js'
        ],
        dest: './public/assets/javascript/lib.js',
      },
    },
    uglify: {
      options: {
        mangle: false  // Use if you want the names of your functions and variables unchanged
      },
      frontend: {
        files: {
          './public/assets/javascript/lib.js': './public/assets/javascript/lib.js',
        }
      }
    },
    jshint: {
            files: ['Gruntfile.js', './src/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                },
                ignores: [
                    // enter paths to ignore here, e.g., 'src/js/jquery.js'
                ]
            }
    },
    watch: {
        js_frontend: {
          files: [
            //watched files
            './bower_components/jquery/dist/jquery.js',
            './bower_components/Snap.svg/dist/snap.svg.js',
            './src/assets/javascript/frontend.js',
            './src/assets/coffee/**/*.coffee'
            ],   
          tasks: ['jshint', 'concat:js_frontend', 'uglify:frontend'],     //tasks to run 
          options: {
            livereload: true                        //reloads the browser
          }
        },
      }
    });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Task definition
  grunt.registerTask('default', ['watch']);

};