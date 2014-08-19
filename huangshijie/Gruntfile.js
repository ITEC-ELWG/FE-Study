
module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['caculator/**/*.js'],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},

			css: {
				files: ['caculator/**/*.css', 'caculator/**/*.html'],
				options: {
					livereload: true
				}
			}
		},

		jshint: {
			all: {
				src: ['caculator/**/*.js']
			}
		}
	});

	//grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint', 'watch']);
};