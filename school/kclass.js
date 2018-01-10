// 引入student和teacher模块
var student = require('./student');
var teacher = require('./teacher');

// 为class模块添加add方法，其中这个方法用到了student和teacher中的add方法
function add(teacherName,students){
	teacher.add(teacherName);
	// 使用forEach遍历进来的这个对象
	students.forEach(function(item,index){
		student.add(item);
	})
}
// 通过exports挂载这个模块的add方法
exports.add = add;
