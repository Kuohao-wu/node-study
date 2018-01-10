const http = require('http')

// 解析cookie
const parseCookie = cookie => {
  let cookies = {}
  if(!cookie) {
    return cookies
  }
  let list = cookie.split(';')
  for(let i = 0; i < list.length; i++) {
    var pair = list[i].split('=');
    cookies[pair[0].trim()] = pair[1]
  }
  return cookies
}

// 序列化生成cookie
const serizlize = (name, val, opt) => {
  const pairs = [name+'='+encodeURI(val)]

  opt = opt || {}

  if(opt.maxAge) pairs.push('Max-Age=' + opt.maxAge)
  if(opt.domain) pairs.push('Domain=' + opt.domain)
  if(opt.expires) pairs.push('Expires=' + opt.expires)
  if(opt.path) pairs.push('Path=' + opt.path)
  if(opt.httpOnly) pairs.push('HttpOnly')
  if(opt.secure) pairs.push('Secure')
  return pairs.join('; ')
}


function setExpires(min) {
  const date = new Date()
  date.setTime(date.getTime()+ min * 60 * 1000)
  return date
}

const handle = (req, res) => {
  if (!req.cookies.isVisit) {
    // 如果是第一次访问页面则设置cookie
    res.setHeader('Set-Cookie', serizlize('isVisit', '1', {
      expires: setExpires(1).toGMTString()
    }))
    res.writeHeader(200, {'Content-Type': 'text/plain;charset=utf-8'})
    res.end('欢迎第一次来测试页面')
  } else {
    res.writeHeader(200, {'Content-Type': 'text/plain;charset=utf-8'})
    res.end('欢迎再次来测试页面')
  }
    
}

const app = http.createServer((req, res) => {
  req.cookies = parseCookie(req.headers.cookie)
  handle(req, res)
});


app.listen(3000)
console.log('server run in port 3000')