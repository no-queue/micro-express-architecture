'use strict'

const Express = require('express')
const Cors = require('cors')
const BodyParser = require('body-parser')

class Config {
    constructor() {
        this.app = Express()
    }

    get App() {
        return this.app
    }

    init() {
        this.app.use(Cors())
        this.app.use(BodyParser.urlencoded({extended: true}))
        this.app.use(BodyParser.json())
    }
}

module.exports = new Config()