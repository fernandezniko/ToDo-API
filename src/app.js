const express = require('express')
require('./db/mongoose')
const userRoute = require('./routers/user')
const taskRoute = require('./routers/task')

const app = express()

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next()
})
app.use(express.json())
app.use(userRoute)
app.use(taskRoute)

module.exports = app
