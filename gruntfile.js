//定义一个模块,导出一个函数
module.exports = (grunt)=>{
	//初始化grunt配置
	grunt.initConfig({
		pack:grunt.file.readJSON('package.json'),
		//指定动作
		concat:{
			//指定文件
			bulid:{
				files:{
					//合并后的文件:合并前的文件(package.json)
					"js/<%=pack.name%>.min.js":"<%=pack.files%>",
					"css/<%=pack.name%>.css":"<%=pack.cssfiles%>"
				}
			}
		},
		uglify:{
			build:{
				//源文件
				src:"js/<%=pack.name%>.js",
				//压缩后的文件
				dest:"js/<%=pack.name%>.min.js"
			}
			
		},
		//css文件的压缩
		cssmin:{
			build:{
				src:"css/<%=pack.name%>.css",
				dest:"css/<%=pack.name%>.min.css"
			}
		},
		//监视
		watch:{
			js:{
				//监视文件
				files:['gruntfile.js','package.json','js/*.js','css/*.css'],
				//监视任务
				tasks:['default']
			}
		}
	})
	
	//导入模块包
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-cssmin')
	
	//注册任务
	grunt.registerTask('default',['concat','uglify','cssmin','watch']);
	
}
