
module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['./**/*.js'],
				options: {
					livereload: true
				}
			},

			css: {
				files: ['./**/*.css', './**/*.html'],
				options: {
					livereload: true
				}
			}
		}
	});

	//grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['watch']);
};