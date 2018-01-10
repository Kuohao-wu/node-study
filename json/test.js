// 引入json文件不需要使用fs，可直接require
var json = require('./test.json')

console.log('his name is ' + json.name)
