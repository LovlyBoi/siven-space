const express = require('express')
// const multer = require('multer')
const { storage, loadFileWithAuth } = require('../uploader')
const makeResponce = require('../utils/makeResponce')
const { serverPath } = require('../config')

const uploadRouter = express.Router()

uploadRouter.post('/acceptMDFile', loadFileWithAuth, (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  // res.setHeader('Access-Control-Allow-Headers', 'Authorization')
  try {
    const filePath = serverPath + '/md2html/md/' + req.file.filename
    res.send(makeResponce(200, { filePath }, '上传成功'))
  } catch {
    res.send(makeResponce(500, null, '⊙﹏⊙||| 上传失败'))
  }
})

uploadRouter.options('/acceptMDFile', (_, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-Headers', 'Authorization')
  res.send()
})

module.exports = uploadRouter
