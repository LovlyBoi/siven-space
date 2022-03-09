const express = require('express')
const { CardModel, connect, create, find } = require('./db')

// const {cards} = require('./db/fakeData')

function makeResponce(code = 200, data = '', msg = '') {
  return JSON.stringify({
    code,
    data,
    msg,
  })
}

connect()
  // .then(() => {
  //   return create(CardModel, ...cards)
  // })
  // .then(res => {
  //   console.log(res)
  // })
  .catch((err) => {
    console.warn(err)
  })

const app = express()

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/getAllCards', (req, res) => {
  find(CardModel, {})
    .then((allCards) => {
      res.send(makeResponce(200, allCards, '查询成功'))
    })
    .catch((err) => {
      res.send(makeResponce(300, '', `查询失败${err}`))
    })
})

app.get('/getAllEssays', (req, res) => {
  find(CardModel, {type: 1})
    .then((allCards) => {
      res.send(makeResponce(200, allCards, '查询成功'))
    })
    .catch((err) => {
      res.send(makeResponce(300, '', `查询失败${err}`))
    })
})

app.get('/getAllNotes', (req, res) => {
  find(CardModel, {type: 2})
    .then((allCards) => {
      res.send(makeResponce(200, allCards, '查询成功'))
    })
    .catch((err) => {
      res.send(makeResponce(300, '', `查询失败${err}`))
    })
})

app.listen(3000, () => {
  console.log('3000 is listening...')
})
