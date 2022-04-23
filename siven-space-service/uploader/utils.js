const crypto = require('crypto')
const fs = require('fs')
// const { resolve, extname } = require('path')

// 获取图片哈希，用来命名
async function getImgHash(path, shortHash = true) {
  const hash = crypto.createHash('md5')
  try {
    const value = await fs.promises.readFile(path)
    hash.update(value, 'utf-8')
    return shortHash ? hash.digest('hex').slice(9, 25) : hash.digest('hex')
  } catch (err) {
    console.log('error: ', err)
  }
}

// console.log(extname('./test.jpg'))
// renameSync('./test.jpg', `req.file.destination + '/' + hashedPicName + '.'`)

module.exports = {
  getImgHash,
}
