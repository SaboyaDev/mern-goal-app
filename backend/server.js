const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const jwtAuth = require('express-jwt')

const userRoutes = require('./routes/user')

const dotenv = require('dotenv').config()
const { NODE_ENV, PORT, MONGO_URI } = process.env

const app = express()
const port = PORT || 5000

// Middleware
app.use(express.json())

// Routes
app.use('/user', userRoutes)

const connectDB = async () => {
	await mongoose.connect(MONGO_URI)
	console.log('MongoDB Connected')
}

connectDB().catch(err => console.log(err))

app.listen(port, () => {
	console.log(`Express app listining on port ${port}`)
})
