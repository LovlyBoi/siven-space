const express = require('express')
const { connect } = require('./db')
const {
  blogRouter,
  cardRouter,
  loginRouter,
  uploadRouter,
} = require('./routes')
const { port } = require('./config')

const app = express()

connect().catch((err) => {
  console.warn(err)
})

app.use(express.json())
app.use(blogRouter)
app.use(cardRouter)
app.use(loginRouter)
app.use(uploadRouter)

app.get('/', (_, res) => {
  res.send('Hello! This is Siven Space.')
})

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
