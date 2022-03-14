const { cards, blogs } = require('./fakeData')
const { create, connect, BlogModel } = require('./index.js')

connect()
  .then(() => {
    return create(BlogModel, ...blogs)
  })
  .catch((err) => {
    console.warn('err ', err)
  })
