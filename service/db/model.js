const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  tag: { name: String, color: String },
  author: String,
  publishDate: Date,
  updateDate: Date,
  title: String,
  pictures: [String],
  id: Number,
  type: Number, // 1 生活随笔，2 笔记
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

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
})

const CardModel = mongoose.model('cards', cardSchema)

const BlogModel = mongoose.model('blogs', blogSchema)

const UserModel = mongoose.model('users', userSchema)

module.exports = { CardModel, BlogModel, UserModel }
