'use strict'

const ExampleController = require('express').Router()
const Example = require('../models/ExampleModel')

ExampleController.get('/', function(req, res) {
    res.send('Hello User')
})

ExampleController.get('/save/:ex', function(req, res) {
    Example.create({example : req.params.ex})
    .then(new_example => res.json(new_example))
    .catch(err => {
        res.status(500).send(err)
    })
})

ExampleController.get('/:ex', async function(req, res) {
    try{
        const new_example = await Example.findById(req.params.ex)
        res.json(new_example)
    } catch(err) {
        res .status(500).send(err)
    }
})

module.exports = ExampleController