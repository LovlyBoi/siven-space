const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  tag: {name: String, color: String},
  author: String,
  publishDate: Date,
  updateDate: Date,
  title: String,
  pictures: [String],
  id: Number,
  type: Number,
  meta: {}
})

const CardModel = mongoose.model('cards', cardSchema)

function connect(db = 'siven') {
  return new Promise((resolve, reject) => {
    mongoose.connect('mongodb://127.0.0.1/' + db, (err, res) => {
      if(err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

function create(model, ...docs) {
  return new Promise((resolve, reject) => {
    model.create(...docs, (err, res) => {
      if(err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

function find(model, condition, projection, options) {
  return new Promise((resolve, reject) => {
    model.find(condition, projection, options, (err, res) => {
      if(err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

module.exports = {
  mongoose,
  cardSchema,
  CardModel,
  connect,
  create,
  find
}
