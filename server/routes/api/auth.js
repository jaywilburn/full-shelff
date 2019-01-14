const _ = require('lodash')
const joi = require('joi')
const bcrypt = require('bcrypt')
const { User } = require('../../models/user')
const express = require('express')
const router = express.Router()

// Authenticate User
router.post('/', async (req, res) => {
  const { error } = validate(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }
  let user = await User.findOne({ email: req.body.email })
  if (!user) {
    return res.status(400).send('Invalid email or password')
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) {
    return res.status(400).send('Error: Invalid email or password')
  }
  const token = user.generateAuthToken()
  res.send(token)
})

router.get('/', async (req, res) => {
  res.send('users will be here soon')
})


function validate(req) {
  const schema = {
    email: joi.string().min(5).max(250).required(),
    password: joi.string().min(8).max(1100).required()
  }
  return joi.validate(req, schema)
}

module.exports = router
