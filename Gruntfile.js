module.exports = function(grunt) {

  grunt.initConfig({
  watch: {
   options: {
    livereload: true,
  },
 html: {
   files: "*.html"
 }
},
connect: {
 server: {
  options: {
   port: 9000,
   hostname: "localhost",
   livereload: true,
   open: true
 }
}
},
});

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ["connect", "watch"]);

};