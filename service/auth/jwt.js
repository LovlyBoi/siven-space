const jwt = require('jsonwebtoken')

const { publicKey } = require('./secret')

function sign(payload, expiresIn = 60 * 60 * 24) {
  return jwt.sign(payload, publicKey, { expiresIn }) // 一天失效
}

function verify(token, publicKey) {
  return jwt.verify(token, publicKey)
}

module.exports = {
  sign,
  verify
}
