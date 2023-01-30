const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const dotenv = require('dotenv').config()
const { JWT_SECRET } = process.env

const authenticate = async (req, res, next) => {
	const token = req.headers.authorization

	if (token) {
		try {
			const { userId } = jwt.verify(token, JWT_SECRET)
			req.user = await User.findById(userId)
		} catch (error) {}
	}
}
