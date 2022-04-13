const express = require('express')
const { loadFileWithAuth } = require('../uploader')
const makeResponce = require('../utils/makeResponce')

const uploadRouter = express.Router()

uploadRouter.post('/acceptMDFile', loadFileWithAuth, (req, res) => {
  try {
    // const filePath = '/md2html/md/' + req.file.filename
    const filePath = req.file.filename
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
