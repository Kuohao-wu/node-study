// 再创建一个start模块，引入刚刚创建的index模块，使用index的模块方法，创建多个班级
// 这种模块化的方法层层依赖，一个模块引入的模块可能也依赖另外一个模块，但是这些模块的命名空间都不会被污染
// 因为它们向外暴露的只有一个方法名，其他变量名则被隐藏起来。

var kclasses = require('./index');
kclasses.add([{teacher:'kuohao',students:['白富美','高富帅']},{teacher:'lily',students:['高精尖','白骨精']}]);