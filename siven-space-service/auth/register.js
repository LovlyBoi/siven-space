const { generate } = require('./index')

const username = 'semghh'
const password = '123456'

generate(password).then((value) => {
  console.log(value)
})
