const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// router.get('/', async (req, res) => {
//   const products = await loadProducts()
//   res.send(await products.find({}).toArray())
// })

// router.post('/', async (req, res) => {
//   const products = await loadProducts()
//   await products.insertOne({
//     text: req.body.text,
//     createdAt: new Date()
//   })
//   res.status(201).send()
// })

// router.delete('/:id', async (req, res) => {
//   const products = await loadProducts()
//   await products.deleteOne({
//     _id: new mongodb.ObjectID(req.params.id)
//   })
//   res.status(200).send()
// })

// async function loadProducts() {
//   const client = await mongodb.MongoClient.connect(
//     process.env.MAIN_DB,
//     { useNewUrlParser: true }
//   )
// }
module.exports = router
