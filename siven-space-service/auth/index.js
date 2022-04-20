const { generate, compare } = require('./crypt')

const { signToken, verifyToken } = require('./jwt')

module.exports = {
  generate,
  compare,
  signToken,
  verifyToken,
}
