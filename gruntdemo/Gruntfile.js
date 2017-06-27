module.exports = function (grunt) {
    // grunt.registerTask('speak',function(){
    //         console.log("I am speaking");    });

    //             grunt.registerTask('yell',function(){
    //         console.log("I am yelling");    });

    //            grunt.registerTask('default',['speak','yell']);
    grunt.initConfig({
        concat:
        {
            js:
            {
                src: ['js/main.js', 'js/style.js'],
                dest: 'build/js/scripts.js'


            },
            css:
            {
                src: ['css/main.css', 'css/style.css'],
                dest: 'build/css/theme.css'
            }

        },

        watch:
        {
            js:
            {
                files: ['js/**/*.js'],
                tasks: ['concat:js']
            },
            css:
            {
                files: ['css/**/*.css'],
                tasks: ['concat:css']
            }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['concat','watch']);

};