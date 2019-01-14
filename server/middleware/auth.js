const jwt = require('jsonwebtoken')

function auth(req, res, next) {
	const token = req.header('x-auth-token')
	if (!token) {
		return res
			.status(401)
			.send('Error: Access denied. No token available or provided.')
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY)
    req.user = decodedToken
    next()
  } catch (error) {
    res.status(400).send('Invalid token')
  }
}

module.exports = auth
