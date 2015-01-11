module.exports = function(grunt){

    // 项目配置
    grunt.initConfig({
        less: {
          development: {
            options: {
              paths: ["style/css"]
            },
            files: {
              "style/main.css": "style/main.less"
            }
          }
        }
    });

    // 加载提供任务的插件
    
    grunt.loadNpmTasks('grunt-contrib-less');

    // 默认任务
    grunt.registerTask('default', ['less']);
}
