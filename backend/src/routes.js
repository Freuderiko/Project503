const express = require('express')

const rouets = express.Router()

//controllers.
const UserController = require('./controllers/UserController')

rouets.post('/users', UserController.store)

module.exports = rouets