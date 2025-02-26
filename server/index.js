const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const dbConnect = require('./config/db')
const app = express()

// routes
const userRoutes = require('./routes/user.routes')
const  authRoutes  = require('./routes/auth.routes')

// middlewares
app.use(bodyParser.json())
app.use(cors())
app.use('/auth', authRoutes)
app.use('/users', userRoutes)

// database connnection
dbConnect()

app.listen(process.env.port, console.log(`Server is running on port ${process.env.port}`))