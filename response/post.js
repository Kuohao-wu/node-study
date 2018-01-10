const http = require('http')
const server = http.createServer()
const qs = require('querystring')

server.on('request', (req, res) => {
  if (req.url === '/test1') {
    // post 数据流处理
    let rawData = []
    let resData = {}
    req.on('data', chunk => {
      rawData.push(chunk)
    })
    req.on('end', () => {
      rawData = Buffer.concat(rawData).toString()
      resData = qs.parse(rawData)

      res.writeHead(200, {'Content-Type': 'text/json'})
      res.end(JSON.stringify(resData))
    })
    
  } else if(req.url === '/test2') {
    let postData = ''
    let resData = {}
    req.on('data', chunk => {
      postData += chunk
    })
    req.on('end', () => {
      resData = qs.parse(postData)
      res.writeHead(200, {'Content-Type': 'text/json'})
      res.end(JSON.stringify(resData))
    })
  }
})

server.listen(3000)
console.log('server run in port 3000')