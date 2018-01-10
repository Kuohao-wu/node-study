// 创建一个模块的方法
function add(teacher){
	console.log('Add Teacher:'+teacher);
}

// 通过exports对象将add方法暴露出去，给全局使用
exports.add = add;