const auth = require('../../middleware/auth')
const _ = require('lodash')
const bcrypt = require('bcrypt')
const { User, validate } = require('../../models/user')
const express = require('express')
const router = express.Router()

// Add a new user
router.post('/', async (req, res) => {
	const { error } = validate(req.body)
	if (error) {
		return res.status(400).send(error.details[0].message)
	}
	let user = await User.findOne({ email: req.body.email })
	if (user) {
		return res.status(400).send('User already exists')
	}

	user = new User(
		_.pick(req.body, [
			'avatar',
			'email',
			'closet_name',
			'cover_photo',
			'first_name',
			'last_name',
			'phone_number',
			'props',
			'role',
			'user_bio',
			'username',
			'password'
		])
	)
	const salt = await bcrypt.genSalt(10)
	user.password = await bcrypt.hash(user.password, salt)
  await user.save()
	const token = user.generateAuthToken()
	res
		.header('x-auth-token', token)
		.send(
			_.pick(user, [
				'_id',
				'username',
				'role',
				'first_name',
				'last_name',
				'email'
			])
		)
})

// Look for a specific user
router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password')
  res.send(user)
})

module.exports = router
