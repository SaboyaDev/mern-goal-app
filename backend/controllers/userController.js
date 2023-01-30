const User = require('../models/userModel')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10

// Create User --> Model.create()
const createUser = async (req, res) => {
	const { email, password } = req.body
	const salt = await bcrypt.genSalt(saltRounds)
	const hashPassword = await bcrypt.hash(password, salt)
	try {
		const user = await User.create({ email, password: hashPassword })
		res.status(200).json(user)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Find User --> Model.findyId()
const findUser = async (req, res) => {
	const { email, password } = req.body

	try {
		// Find user
		const user = await User.findOne({ email })
		if (!email) throw new Error('User not found')

		const isMatch = await bcrypt.compare(password, user.password)
		if (!isMatch) throw new Error('Invalid credentials')

		res.status(200).json({ message: 'Logged in successfully' })

		// Compare Passwords
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Update User

// Delete User

module.exports = {
	createUser,
	findUser,
}
