const { generate, compare } = require('./crypt')

const { sign, verify } = require('./jwt')

module.exports = {
  generate,
  compare,
  sign,
  verify,
}
