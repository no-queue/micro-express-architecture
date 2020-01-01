'use strict'

const config = require('./utils/config')
const jwt = require('express-jwt')

config.init()
const App = config.App

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
App.use('/', require('./controllers/DefaultController'))

module.exports = App