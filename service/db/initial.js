const { cards, blogs, users } = require('./fakeData')
const { create, connect, BlogModel, UserModel } = require('./index.js')

connect()
  .then(() => {
    return create(UserModel, ...users)
  })
  .catch((err) => {
    console.warn('err ', err)
  })
