const express = require('express')
const { resolve, extname } = require('path')
const { renameSync } = require('fs')
const { loadFileWithAuth, loadPicWithAuth, getImgHash } = require('../uploader')
const { deleteHtml } = require('../md2html')
const makeResponce = require('../utils/makeResponce')

const uploadRouter = express.Router()

// const imgStoragePath = resolve(__dirname, '../img')

// markdown文件上传
uploadRouter.options('/acceptMDFile', (_, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-Headers', 'Authorization')
  res.send()
})

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

// 图片上传
uploadRouter.options('/acceptPic', (_, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-Headers', 'Authorization')
  res.send()
})

uploadRouter.post('/acceptPic', loadPicWithAuth, async (req, res) => {
  try {
    const hashedPicName = await getImgHash(req.file.path)
    const picExtname = extname(req.file.path)
    renameSync(
      req.file.path,
      `${req.file.destination}/${hashedPicName}${picExtname}`
    )
    res.send(
      makeResponce(
        200,
        { url: `${hashedPicName}${picExtname}` },
        '图片上传成功！'
      )
    )
  } catch (err) {
    console.log(err)
    res.send(makeResponce(500, null, '⊙﹏⊙||| 上传失败'))
  }
})

module.exports = uploadRouter
