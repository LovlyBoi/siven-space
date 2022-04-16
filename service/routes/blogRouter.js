const express = require('express')
const { BlogModel, find } = require('../db')
const makeResponce = require('../utils/makeResponce')
const { parseMd } = require('../md2html')

const blogRouter = express.Router()

blogRouter.get('/getBlogById', (req, res) => {
  const id = req.query.id
  find(BlogModel, { id })
    .then((blog) => {
      blog = blog[0]
      // console.log(blog)
      const fullName = blog.body
      if (!fullName) {
        // console.log(fullName)
        res.send(makeResponce(500, '', 'ﾉ)ﾟДﾟ( 请求没有文章名'))
        return
      }
      const tmp = fullName.split('.')
      const filename = tmp.slice(0, tmp.length - 1).join('.')
      const { html, valid } = parseMd(filename)
      blog.body = html
      if (!valid) {
        res.send(makeResponce(500, '', 'ﾉ)ﾟДﾟ( 这篇文章跑路了'))
        return
      }
      res.send(makeResponce(200, [blog], '查询成功'))
    })
    .catch((err) => {
      res.send(makeResponce(300, '', `查询失败${err}`))
    })
})

module.exports = blogRouter
