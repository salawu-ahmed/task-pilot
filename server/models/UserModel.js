const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address'],
        unique: [true, 'This email is already in use'],
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'manager', 'user']
    }
})

module.exports = mongoose.model('User', userSchema)