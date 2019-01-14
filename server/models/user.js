const joi = require('joi')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
	avatar: String,
	email: {
		type: String,
		unique: true,
		required: true,
		minlength: 5,
		maxlength: 250
	},
	closet_name: String,
	cover_photo: String,
	created: {
		type: Date,
		default: Date.now
	},
	first_name: String,
	last_name: String,
	phone_number: String,
	props: Number,
	role: String,
	updated: {
		type: Date,
		default: Date.now
	},
	user_bio: String,
	username: {
		type: String,
		unique: true,
		minlength: 5,
		maxlength: 40,
		required: true
	},
	password: {
		type: String,
		minlength: 8,
		maxlength: 1100,
		required: true
  },
  isAdmin: {
    type: Boolean
  }
})
userSchema.methods.generateAuthToken = function() {
	const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, process.env.JWT_PRIVATE_KEY)
	return token
}
const User = mongoose.model('User', userSchema)

function validateUser(user) {
	const schema = {
		avatar: joi.string(),
		email: joi
			.string()
			.min(5)
			.max(250)
			.required(),
		closet_name: joi.string(),
		cover_photo: joi.string(),
		first_name: joi.string(),
		last_name: joi.string(),
		phone_number: joi.string(),
		props: joi.number(),
		role: joi.string(),
		user_bio: joi.string(),
		username: joi
			.string()
			.min(5)
			.max(40)
			.required(),
		password: joi
			.string()
			.min(8)
			.max(1100)
      .required(),
    isAdmin: joi.boolean().default(false)
	}
	return joi.validate(user, schema)
}
exports.validate = validateUser
exports.User = User
