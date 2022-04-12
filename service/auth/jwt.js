const jwt = require('jsonwebtoken')

const { publicKey } = require('./secret')

function signToken(payload, expiresIn = 60 * 60 * 24) {
  return jwt.sign(payload, publicKey, { expiresIn }) // 一天失效
}

function verifyToken(token) {
  if (!token) return false
  const decoded = jwt.verify(token, publicKey)
  if (!decoded) return false
  if (decoded.exp < Date.now() / 1000) return false
  return true
}

module.exports = {
  signToken,
  verifyToken,
}
