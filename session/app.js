const http = require('http')

const session = {}
const key = 'session_id'
const EXPIRES = 1 * 60 * 1000

// 使用http.createServer创建一个服务器
const app = http.createServer((req, res) => {
  console.log(req.cookies)
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('hello world')
});

app.listen(3000)

console.log('server run in port 3000')