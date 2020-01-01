'use strict'

const express = require('express')
const jwt = require('express-jwt')

const App = express()

App.use(
    jwt({secret: process.env.API_SECRET}).unless({
        path: [
            '/',
            '/example',
            '/example/.'
        ]
    })
)

App.use('/example', require('./controllers/ExampleController'))

module.exports = App