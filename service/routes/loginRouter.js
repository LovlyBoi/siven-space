const express = require('express')
const { find, UserModel } = require('../db')
const makeResponce = require('../utils/makeResponce')
const { compare, sign } = require('../auth')

const loginRouter = express.Router()

loginRouter.post('/login', (req, res) => {
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

module.exports = loginRouter
