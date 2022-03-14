const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  tag: { name: String, color: String },
  author: String,
  publishDate: Date,
  updateDate: Date,
  title: String,
  pictures: [String],
  id: Number,
  type: Number,
  meta: {},
})

const blogSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  publishDate: Date,
  updateDate: Date,
  body: String,
})

const CardModel = mongoose.model('cards', cardSchema)

const BlogModel = mongoose.model('blogs', blogSchema)

module.exports = { CardModel, BlogModel }
