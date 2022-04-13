const mongoose = require('mongoose')
const { CardModel, BlogModel, UserModel } = require('./model')
const idMaker = require('./SeqIdMaker')

function connect(db = 'siven') {
  return new Promise((resolve, reject) => {
    mongoose.connect('mongodb://127.0.0.1/' + db, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

function create(model, ...docs) {
  return new Promise((resolve, reject) => {
    model.create(...docs, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

function find(model, condition, projection, options) {
  return new Promise((resolve, reject) => {
    model.find(condition, projection, options, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

function createBlog(options) {
  const cardData = {
    tag: {
      name: options.tagName,
      color: options.tagColor,
    },
    author: options.author,
    publishDate: options.publishDate,
    updateDate: options.updateDate,
    title: options.title,
    pictures: options.pictures,
    type: options.type,
    meta: options.meta ?? {},
  }
  const blogData = {
    title: options.title,
    author: options.author,
    publishDate: options.publishDate,
    updateDate: options.updateDate,
    body: options.filePath,
  }
  cardData.id = blogData.id = idMaker.id
  idMaker.incId()
  // console.log(cardData, blogData)
  return Promise.all([
    create(CardModel, [cardData]),
    create(BlogModel, [blogData]),
  ])
}

module.exports = {
  mongoose,
  CardModel,
  BlogModel,
  UserModel,
  connect,
  create,
  find,
  createBlog,
}
