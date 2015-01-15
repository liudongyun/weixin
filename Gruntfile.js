module.exports = function(grunt){

    // 项目配置
    grunt.initConfig({
        less: {
          development: {
            options: {
              paths: ["style/css"]
            },
            files: {
              "style/main.css": "style/main.less",
              "style/css/index2.css":"style/less/index2.less"
            }
          }
        },
        watch:{
          files:'style/**/*.less',
          tasks:['less']
        }
    });

    // 加载提供任务的插件
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认任务
    grunt.registerTask('default', ['less']);
}
