// Setting up dotenv to handle keys and passwords
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// Middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const posts = require('./routes/api/posts')
const products = require('./routes/api/products')
const users = require('./routes/api/users')
app.use('/api/posts', posts)
app.use('/api/products', products)
app.use('/api/users', users)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'))

  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })
}
// set the port here
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
