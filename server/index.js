// Setting up dotenv to handle keys and passwords
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const posts = require('./routes/api/posts')
const products = require('./routes/api/products')
const users = require('./routes/api/users')
const auth = require('./routes/api/auth')

const app = express()

// Connect to the DB
mongoose
	.connect(
		process.env.MAIN_DB,
		{ useNewUrlParser: true }
	)
	.then(() => console.log('connected to the Mongo DB'))
	.catch(err => console.error('Error connecting to DB: ' + err))
mongoose.set('useCreateIndex', true)

// Middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/posts', posts)
app.use('/api/products', products)
app.use('/api/users', users)
app.use('/api/auth', auth)

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(__dirname + '/public/'))

	app.get(/.*/, (req, res) => {
		res.sendFile(__dirname + '/public/index.html')
	})
}
// set the port here
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
