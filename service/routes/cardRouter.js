const express = require('express')
const { find, CardModel } = require('../db')
const makeResponce = require('../utils/makeResponce')

const cardRouter = express.Router()

// 查询各种博客的服务
cardRouter.get('/getAllCards', (req, res) => {
  find(CardModel, {})
    .then((allCards) => {
      res.send(makeResponce(200, allCards, '查询成功'))
    })
    .catch((err) => {
      res.send(makeResponce(300, '', `查询失败${err}`))
    })
})

cardRouter.get('/getAllEssays', (req, res) => {
  find(CardModel, { type: 1 })
    .then((allCards) => {
      res.send(makeResponce(200, allCards, '查询成功'))
    })
    .catch((err) => {
      res.send(makeResponce(300, '', `查询失败${err}`))
    })
})

cardRouter.get('/getAllNotes', (req, res) => {
  find(CardModel, { type: 2 })
    .then((allCards) => {
      res.send(makeResponce(200, allCards, '查询成功'))
    })
    .catch((err) => {
      res.send(makeResponce(300, '', `查询失败${err}`))
    })
})

module.exports = cardRouter
