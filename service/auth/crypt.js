const bcrypt = require('bcryptjs')

function genSalt(num = 6) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(num, (err, salt) => {
      if (err) {
        reject(err)
      }
      resolve(salt)
    })
  })
}

async function generate(password) {
  const salt = await genSalt()
  return await new Promise((resolve, reject) => {
    bcrypt.hash(password, salt, (err, pwd) => {
      if (err) {
        reject(err)
      }
      resolve(pwd)
    })
  })
}

async function compare(password, cryptedPassword) {
  return await new Promise((resolve, reject) => {
    bcrypt.compare(password, cryptedPassword, (err, isOK) => {
      if (err) {
        reject(err)
      }
      resolve(isOK)
    })
  })
}

module.exports = {
  generate,
  compare
}
