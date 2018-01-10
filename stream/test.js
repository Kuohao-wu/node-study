const fs = require('fs')
const http = require('http')
const server = http.createServer()

// 创建一个可读流
const stream = fs.createReadStream('./test.json')
stream.on('data', chunk => {
  console.log(chunk)
})
stream.on('end', () => {
  console.log('finish')
})


server.on('request', (req, res) => {
  res.writeHead(200, {"Content-Type": "text/json"})
  // 读取一个文件，以数据流的方式写入res返回给客户端，res实际上是一个可写流
  fs.createReadStream('./test.json').pipe(res)
})

server.listen(4000)
console.log('server run in port 4000')
