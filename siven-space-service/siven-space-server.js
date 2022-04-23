const express = require('express')
const { connect, CardModel } = require('./db')
const {
  blogRouter,
  cardRouter,
  loginRouter,
  uploadRouter,
} = require('./routes')
const idMaker = require('./db/SeqIdMaker')
const { port } = require('./config')

const app = express()

app.use(express.static('dist'))
app.use(express.static('img'))

connect()
  .then(() => {
    //  同步一下自增id值
    CardModel.find({}, (err, data) => {
      if (err) return
      idMaker.setId(data.length + 1)
      console.log('id:', idMaker.id)
    })
  })
  .catch((err) => {
    console.warn(err)
  })

app.use(express.json())
app.use(blogRouter)
app.use(cardRouter)
app.use(loginRouter)
app.use(uploadRouter)

// app.get('/', (_, res) => {
//   res.send('Hello! This is Siven Space.')
// })

// app.get('/getArticle', (req, res) => {
//   const filename = req.query.article
//   const { html: markedString, valid } = parseMd(filename)
//   if (valid) {
//     res.send(makeResponce(200, markedString, ''))
//   } else {
//     res.send(makeResponce(500, '', 'ﾉ)ﾟДﾟ( 这篇文章跑路了'))
//   }
// })

app.listen(port, () => {
  console.log(port + ' is listening...')
})
