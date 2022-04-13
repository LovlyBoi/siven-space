const { cards, blogs, users } = require('./fakeData')
const { create, connect, BlogModel, UserModel, CardModel } = require('./')

connect()
  .then(() => {
    return create(BlogModel, ...blogs)
  })
  .catch((err) => {
    console.warn('err ', err)
  })
