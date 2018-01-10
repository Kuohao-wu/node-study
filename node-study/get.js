/*author:kuohao*/
//https.request(option,[callbacl]),option是一个对象，里面包含了请求的一些信息，callback是请求完成时候的回调

const https = require('https')
const qs = require('querystring')

//设置请求信息
const option = {
  hostname: 'api.github.com',
  path: '/?access_token=7fc2221157d5c94e30862dcc59e732247b38f36c',  // queryString必须放在path中
  protocol: 'https:',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'Kuohao-wu'   // 访问github api需要设置user-agent，不然会被拒
  }
}

//发起请求
const req = https.request(option, function (res) {
  let rawData = ''
  // 查看header
  console.log('header: ' + JSON.stringify(res.headers, null, 2))

  res.setEncoding('utf8')
  res.on('data', function (chunk) {
    rawData += chunk
  })
  res.on('end', function () {
    console.log('获取完毕')
    console.log(JSON.stringify(JSON.parse(rawData), null, 2))
  })
})

req.on('error', function (err) {
  console.log('Error' + err.message)
})

//完成请求
req.end()