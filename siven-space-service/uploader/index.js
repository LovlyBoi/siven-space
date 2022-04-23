const multer = require('multer')
const { resolve } = require('path')
const { verifyToken } = require('../auth')
const utils = require('./utils')
const makeResponce = require('../utils/makeResponce')

let mdFilePath = resolve(__dirname, '../md2html/md')
let picPath = resolve(__dirname, '../img')
//设置文件的名称
// let filename = ''
const mdFileStorage = multer.diskStorage({
  //设置存储路径
  destination: (req, file, cb) => {
    cb(null, mdFilePath)
  },
  //设置存储的文件名
  filename: (req, file, cb) => {
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
  multer({ storage: mdFileStorage }).single('file')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      res.send(makeResponce(500, null, '⊙﹏⊙||| 上传失败'))
    } else if (err) {
      res.send(makeResponce(500, null, '⊙﹏⊙||| 上传失败 服务器错误'))
    } else {
      next()
    }
  })
}

const picStorage = multer.diskStorage({
  //设置存储路径
  destination: (req, file, cb) => {
    cb(null, picPath)
  },
  //设置存储的文件名
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

function loadPicWithAuth(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-Headers', 'Authorization')
  const token = req.headers.authorization
  const isTokenValid = verifyToken(token)
  if (!isTokenValid) {
    res.send(makeResponce(400, null, '登录过期辣！'))
    next()
  }
  multer({ storage: picStorage }).single('file')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log(err)
      res.send(makeResponce(500, null, '⊙﹏⊙||| 上传失败'))
    } else if (err) {
      console.log(err)
      res.send(makeResponce(500, null, '⊙﹏⊙||| 上传失败 服务器错误'))
    } else {
      next()
    }
  })
}

module.exports = {
  mdFileStorage,
  picStorage,
  loadFileWithAuth,
  loadPicWithAuth,
  ...utils,
}
