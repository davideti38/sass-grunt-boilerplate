

module.exports = function(grunt)
{

	require('load-grunt-tasks')(grunt);


	grunt.initConfig({


// -------------- SVG --------------------------------

	grunticon: {

		  icons: {

		    files: [{
		      expand: true,
		      cwd: "../src/img/svg/",
		      src: ["*.svg"],
		      dest: "../src/img/svg/fallbacks/"
		    }],
		    options: {
		      enhanceSVG: true
		    }

		  }

	},

// -------------- sass file compression --------------------------------

	sass: {

        options: {
        	require: 'susy',
            sourceMap: true,
            outputStyle: 'compressed'

        },

        dist: {
            files: {
                '../src/css/style.css': '../src/scss/main.scss'
            }
        }
    },


// -------------- autoprefixer  --------------------------------

     postcss: {

     	    options: {
			      map: false, // inline sourcemaps

			      // or
			      map: {
			          inline: false, // save all sourcemaps as separate files...
			          annotation: 'dist/css/maps/' // ...to the specified directory
			      },

			      processors: [
			        require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
			      ]
			    },

            dist: {
                src: '../src/css/style.css'
            }

        },

// -------------- watch ------------------------

	watch: {

		options: {

			livereload: true, // need to have this to work -> <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

		},
		scss: {
			files: ['../src/scss/**/*.scss'],
			tasks: ['sass', 'postcss'],

		},

		svg: {
			files: ['../src/img/svg/*.svg'],
			tasks: ['grunticon'],
		},


	},

 });



// -------------- Deployment to production  --------------------------------
	//grunt.registerTask('prod', ['sass','postcss','requirejs' ,'imagemin']);

}