
module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['blog/scripts/**/*.js'],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},

			css: {
				files: ['blog/css/**/*.css', 'blog/**/*.html'],
				options: {
					livereload: true
				}
			}
		},

		jshint: {
			all: {
				src: ['blog/scripts/**/*.js', '! blog/scripts/output.min.js']
			}
		}
	});

	//grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint', 'watch']);
};