const express = require('express')
const { BlogModel, find } = require('../db')
const makeResponce = require('../utils/makeResponce')

const blogRouter = express.Router()

blogRouter.get('/getBlogById', (req, res) => {
  const id = req.query.id
  find(BlogModel, { id })
    .then((blog) => {
      res.send(makeResponce(200, blog, '查询成功'))
    })
    .catch((err) => {
      res.send(makeResponce(300, '', `查询失败${err}`))
    })
})

module.exports = blogRouter
