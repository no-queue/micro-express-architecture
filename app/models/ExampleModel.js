'use strict'

const mongoose = require('mongoose')
const bcrypt = require('mongoose-bcrypt')
const timestamps = require('mongoose-timestamp')
const mongooseStringQuery = require('mongoose-string-query')

const logger = require('../utils/logger')

const ExampleSchema = new mongoose.Schema({
    example: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true
    }
}, {collection: 'example'})

ExampleSchema.pre('save', function(next) {
    if(!this.isNew) next()
    try {
        example({
            type: 'welcome',
            example: this.example
        })
        next()
    }
    catch(err){
        logger.info(err)
        next()
    }
})

// require plugins
ExampleSchema.plugin(bcrypt); // automatically bcrypts passwords
ExampleSchema.plugin(timestamps); // automatically adds createdAt and updatedAt timestamps
ExampleSchema.plugin(mongooseStringQuery); // enables query capabilities (e.g. ?foo=bar)

module.exampleSchema = ExampleSchema
module.exports = mongoose.model('Example', ExampleSchema);