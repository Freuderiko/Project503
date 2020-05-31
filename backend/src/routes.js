const express = require('express')

const rouets = express.Router()

//controllers.
const UserController = require('./controllers/UserController')

//User routes.
rouets.post('/users', UserController.store)
rouets.post('/login', UserController.login)

module.exports = rouets