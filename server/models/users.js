const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  avatar: String,
  closet_name: String,
  cover_photo: String,
  created: { type: Date, default: Date.now },
  first_name: String,
  last_name: String,
  phone_number: String,
  props: Number,
  role: String,
  updated: { type: Date, default: Date.now },
  user_bio: String,
  username: String
})

module.exports = mongoose.model('User', UserSchema)
