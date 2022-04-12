const express = require('express')
const multer = require('multer')
const { storage } = require('./uploader')
const { connect, find, BlogModel, CardModel, UserModel } = require('./db')
const { generate, compare, sign, verify } = require('./auth')
const { parseMd } = require('./md2html')

const port = 3000
const serverPath = 'http://127.0.0.1:' + port

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
  res.send('Hello! This is Siven Space.')
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
    res.send(makeResponce(401, '', '(O_o)?? 先把用户名和密码填全啊喂！'))
    return
  }

  find(UserModel, { username: username })
    .then(async (data) => {
      if (!data[0]?.password) {
        // console.log(data)
        res.send(makeResponce(402, '', '!?(･_･;? 用户名还没有注册哦'))
        return
      }
      const isOk = await compare(password, data[0].password)
      if (isOk) {
        const token = sign({ username })
        res.send(makeResponce(200, { token }, '登陆成功'))
      } else {
        res.send(makeResponce(403, '', '（ﾟдﾟlll） 密码不对哇'))
      }
    })
    .catch((err) => {
      console.log(err)
      res.send(makeResponce(500, err, '程序错误'))
    })
})

app.get('/getArticle', (req, res) => {
  const filename = req.query.article
  const { html: markedString, valid } = parseMd(filename)
  if (valid) {
    res.send(makeResponce(200, markedString, ''))
  } else {
    res.send(makeResponce(500, '', 'ﾉ)ﾟДﾟ( 这篇文章跑路了'))
  }
})

app.post('/acceptMDFile', multer({ storage }).single('file'), (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  // console.log(req.file)
  const filePath = serverPath + '/md2html/md/' + req.file.filename
  res.send(makeResponce(200, { filePath }, '上传成功'))
})

app.options('/acceptMDFile', (_, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.send()
})

app.listen(port, () => {
  console.log(port + ' is listening...')
})
