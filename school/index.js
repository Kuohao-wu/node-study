// 通过index.js这个启动文件启动刚刚的模块 
var kclass = require('./kclass');

exports.add = function (kclasses){
	kclasses.forEach(function(item,index){
		var _kclass = item;
		var _teacher = _kclass.teacher;
		var _students = _kclass.students;
		kclass.add(_teacher,_students);
	})
}