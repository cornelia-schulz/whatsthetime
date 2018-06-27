const path = require('path')
const express = require('express')

const timeRoutes = require('./routes/time')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/time', timeRoutes)

module.exports = server