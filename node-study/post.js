const http = require('http')
const qs = require('querystring')

const opt = {
  hostname: 'localhost',
  port: '3000',
  path: '/test2',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencode'
  } 
}

const postData = qs.stringify({
  name: 'kuohao',
  age: 22
})

const req = http.request(opt, res => {
  let rawData = ''
  res.setEncoding('utf8')
  res.on('data', chunk => {
    rawData += chunk
  })

  res.on('end', () => {
    console.log(rawData)
  })
})

req.on('error', err => {
  console.log('Error:' + err.message)
})

// 将post参数写入请求体
req.write(postData)

// 发起请求
req.end()

