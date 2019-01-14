const mongoose = require('mongoose')

var ProductSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  updated_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Product', ProductSchema)
