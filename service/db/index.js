const mongoose = require('mongoose')

const { CardModel, BlogModel, UserModel } = require('./model')

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

module.exports = {
  mongoose,
  CardModel,
  BlogModel,
  UserModel,
  connect,
  create,
  find,
}
