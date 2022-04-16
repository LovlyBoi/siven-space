const express = require('express')
const { loadFileWithAuth } = require('../uploader')
const { deleteHtml } = require('../md2html')
const makeResponce = require('../utils/makeResponce')

const uploadRouter = express.Router()

uploadRouter.post('/acceptMDFile', loadFileWithAuth, (req, res) => {
  try {
    const filePath = req.file.filename
    const tmp = filePath.split('.')
    const filename = tmp.slice(0, tmp.length - 1).join('.')
    // 上传文件，清除原来的html缓存
    deleteHtml(filename)
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
