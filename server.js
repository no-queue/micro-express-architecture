'use strict'

const Cors = require('cors')
const BodyParser = require('body-parser')
const dotenv = require('dotenv')

const httpLogger = require('./app/middlewares/httpLogger')
const logger = require('./app/utils/logger')

dotenv.config()
const Api = require('./app')
require('./db')

Api.use(httpLogger)
Api.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError')
        res.status(401).send('Missing authentication credentials.')
})

Api.use(Cors())
Api.use(BodyParser.urlencoded({extended: true}))
Api.use(BodyParser.json())

Api.listen(process.env.PORT, logger.info(`App initiated at port ${process.env.PORT}`))
