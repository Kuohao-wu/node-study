const fs = require('fs')

// 异步读取文本
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path ,(err, data) => {
      !err ? resolve(data) : reject(err)
    })
  })
}

async function getText() {
  const data = await readFileAsync('./input.txt')
  console.log(data.toString())
}


// 异步写入文本

function writeFileAsync(path, data, options) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, options, (err) => {
      err ? reject(err) : resolve('success')
    });
  })
}

async function writeText() {
  const path = './output.txt'
  // =============== 开始写入文件 ================
  const res = await writeFileAsync(path, 'hello nodejs', {flag: 'w'})
  res === 'success' && console.log('文件写入成功')

  // 读取写入的文件
  const data = await readFileAsync(path)
  console.log(data.toString())
}


writeText()

