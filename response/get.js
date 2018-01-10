const http = require('http')
const server = http.createServer()
// url模块，专门处理url
const url = require('url')
// 小工具模块
const util = require('util')

server.on('request', (req, res) => {
  // 设置编码，防止乱码
  res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'})
  // 加true参数，将解析出来的query参数转成对象
  let params = url.parse(req.url, true).query
  // 将数据写入缓冲区
  res.write('姓名: ' + params.name + '\n')
  res.write('年龄:' + params.age)
  // 将缓冲区的数据返回
  res.end()
})

server.listen(8080)
console.log('server run in port 8080')