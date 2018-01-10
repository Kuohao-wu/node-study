const fs = require('fs')
const path = require('path')

function readDir(dirPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, async (err, data) => {
      if (err) reject('读取文件失败')
      resolve(data)
    })
  })
}


async function deleteDirFile(dirPath) {
  try {
    const files = await readDir(dirPath)
    filesPath = files.map(item => path.join('./', dirPath, item))
    filesPath.map(item => fs.unlinkSync(item))
  }catch(e) {
    console.log(e)
  }
} 
    
deleteDirFile('./text')
