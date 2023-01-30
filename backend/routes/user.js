const express = require('express')

const { createUser, findUser } = require('../controllers/userController')

const router = express.Router()

// POST a new user
router.post('/sign-up', createUser)

// GET user
router.get('/login', findUser)

module.exports = router
