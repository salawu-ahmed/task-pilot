const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

// routes
const userRoutes = require('./routes/UserRoutes')

// middlewares
app.use(bodyParser.json())
app.use(cors())
app.use('/users', userRoutes)

// database connnection
mongoose.connect('mongodb://127.0.0.1:27017/taskPilot')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(process.env.port, console.log(`Server is running on port ${process.env.port}`))