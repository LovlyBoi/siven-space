const express = require('express')
const multer = require('multer')
const { storage } = require('../uploader')
const makeResponce = require('../utils/makeResponce')

const uploadRouter = express.Router()

uploadRouter.post(
  '/acceptMDFile',
  multer({ storage }).single('file'),
  (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    try {
      const filePath = '/md2html/md/' + req.file.filename
      res.send(makeResponce(200, { filePath }, '上传成功'))
    } catch {
      res.send(makeResponce(500, null, '⊙﹏⊙||| 上传失败'))
    }
  }
)

uploadRouter.options('/acceptMDFile', (_, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.send()
})

module.exports = uploadRouter
