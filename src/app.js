const express = require('express')
require('./db/mongoose')
const userRoute = require('./routers/user')
const taskRoute = require('./routers/task')

const app = express()

//parsea el json que viene a un objeto
app.use(express.json())
app.use(userRoute)
app.use(taskRoute)

module.exports = app
