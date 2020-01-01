'use strict'

const DefaultController = require('express').Router()

DefaultController.get('/', function({ res }) {
    res.status(200).send('It Works!')
})

module.exports = DefaultController