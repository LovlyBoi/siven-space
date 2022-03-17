const express = require('express')
const { connect, find, BlogModel, CardModel, UserModel } = require('./db')
const { generate, compare, sign, verify } = require('./auth')

function makeResponce(code = 200, data = '', msg = '') {
  return JSON.stringify({
    code,
    data,
    msg,
  })
}

connect().catch((err) => {
  console.warn(err)
})

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello!')
})

// 查询各种博客的服务
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
  find(CardModel, { type: 1 })
    .then((allCards) => {
      res.send(makeResponce(200, allCards, '查询成功'))
    })
    .catch((err) => {
      res.send(makeResponce(300, '', `查询失败${err}`))
    })
})

app.get('/getAllNotes', (req, res) => {
  find(CardModel, { type: 2 })
    .then((allCards) => {
      res.send(makeResponce(200, allCards, '查询成功'))
    })
    .catch((err) => {
      res.send(makeResponce(300, '', `查询失败${err}`))
    })
})

app.get('/getBlogById', (req, res) => {
  const id = req.query.id
  find(BlogModel, { id })
    .then((blog) => {
      res.send(makeResponce(200, blog, '查询成功'))
    })
    .catch((err) => {
      res.send(makeResponce(300, '', `查询失败${err}`))
    })
})

app.post('/login', (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    res.send(makeResponce(401, '', '输入信息不全'))
    return
  }

  find(UserModel, { username: username })
    .then(async (data) => {
      if (!data[0]?.password) {
        console.log(data)
        res.send(makeResponce(402, '', '用户未注册'))
        return
      }
      const isOk = await compare(password, data[0].password)
      if (isOk) {
        const token = sign({ username })
        res.send(makeResponce(200, { token }, '登陆成功'))
      } else {
        res.send(makeResponce(403, '', '密码错误'))
      }
    })
    .catch((err) => {
      console.log(err)
      res.send(makeResponce(500, err, '程序错误'))
    })
})

app.listen(3000, () => {
  console.log('3000 is listening...')
})
