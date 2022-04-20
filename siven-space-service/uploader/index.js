const multer = require('multer')
const { resolve } = require('path')
const { verifyToken } = require('../auth')
const makeResponce = require('../utils/makeResponce')

let fullPath = resolve(__dirname, '../md2html/md')
//设置文件的名称
// let filename = ''
const storage = multer.diskStorage({
  //设置存储路径
  destination: (req, file, cb) => {
    cb(null, fullPath)
  },
  //设置存储的文件名
  filename: (req, file, cb) => {
    // let fileExtname = extname(file.originalname)
    // const splitedFilename = file.originalname.split('.')
    // const filenameWithoutExtend = splitedFilename
    //   .slice(0, splitedFilename.length - 1)
    //   .join('')
    // filename = `${filenameWithoutExtend}-${Date.now()}${fileExtname}`
    // cb(null, filename)
    cb(null, file.originalname)
  },
})

function loadFileWithAuth(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-Headers', 'Authorization')
  const token = req.headers.authorization
  const isTokenValid = verifyToken(token)
  if (!isTokenValid) {
    res.send(makeResponce(400, null, '登录过期辣！'))
    next()
  }
  multer({ storage }).single('file')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      res.send(makeResponce(500, null, '⊙﹏⊙||| 上传失败'))
    } else if (err) {
      res.send(makeResponce(500, null, '⊙﹏⊙||| 上传失败 服务器错误'))
    } else {
      next()
    }
  })
}

module.exports = {
  storage,
  loadFileWithAuth,
}
