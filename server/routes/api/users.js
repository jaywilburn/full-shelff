const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// Get Users
router.get('/', async (req, res) => {
  const users = await loadUsers()
  res.send(await users.find({}).toArray())
})

// Add User
router.post('/', async (req, res) => {
  const users = await loadUsers()
  await users.insertOne({
    text: req.body.text,
    createdAt: new Date()
  })
  res.status(201).send()
})

// Delete User
router.delete('/:id', async (req, res) => {
  const users = await loadUsers()
  await users.deleteOne({
    _id: new mongodb.ObjectID(req.params.id)
  })
  res.status(200).send()
})

async function loadUsers() {
  const client = await mongodb.MongoClient.connect(process.env.MAIN_DB, { useNewUrlParser: true })
  return client.db(process.env.MAIN_DATA).collection('users')
}
module.exports = router
