const express = require('express')
const { verifyToken } = require('../auth/jwt')
const { find, CardModel, createBlog } = require('../db')
const makeResponce = require('../utils/makeResponce')

const cardRouter = express.Router()

// 查询各种博客的服务
cardRouter.get('/getAllCards', (_, res) => {
  find(CardModel, {})
    .then((allCards) => {
      res.send(makeResponce(200, allCards, '查询成功'))
    })
    .catch((err) => {
      res.send(makeResponce(300, '', `查询失败${err}`))
    })
})

cardRouter.get('/getAllEssays', (_, res) => {
  find(CardModel, { type: 1 })
    .then((allCards) => {
      res.send(makeResponce(200, allCards, '查询成功'))
    })
    .catch((err) => {
      res.send(makeResponce(300, '', `查询失败${err}`))
    })
})

cardRouter.get('/getAllNotes', (_, res) => {
  find(CardModel, { type: 2 })
    .then((allCards) => {
      res.send(makeResponce(200, allCards, '查询成功'))
    })
    .catch((err) => {
      res.send(makeResponce(300, '', `查询失败${err}`))
    })
})

cardRouter.post('/publishNewCard', (req, res) => {
  const token = req.headers.authorization
  const isTokenValid = verifyToken(token)
  if (!isTokenValid) {
    res.send(makeResponce(400, '', '登录过期辣！'))
    return
  }
  const card = req.body
  createBlog(card)
    .then((data) => {
      // console.log(data)
      res.send(makeResponce(200, '', '发布成功'))
    })
    .catch((err) => {
      console.log(err)
      res.send(makeResponce(500, '', '发布失败'))
    })
})

module.exports = cardRouter
