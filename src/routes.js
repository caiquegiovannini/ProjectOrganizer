const express = require('express')
const routes = express.Router()

const ProjectController = require('./app/controllers/ProjectController')

routes.get('/', ProjectController.index)

routes.get('/create', ProjectController.create)

module.exports = routes