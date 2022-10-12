const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: [true, 'Please add a unique username']
    },
    firstName: {
        type: String,
        required: [true, 'Please add a first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please add a last name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: [true, "Please add a unique email"]
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)