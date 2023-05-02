const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')
// API
route.post('/', controller.home)

module.exports = route