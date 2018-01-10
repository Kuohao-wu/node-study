// 创建一个模块的方法
function add(student){
	console.log('Add Studend:'+student);
}

// 通过exports对象将add方法暴露出去，给全局使用
exports.add = add;