const mongoose = require('mongoose')

const groupProjectSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        title: {
            type: String,
            required: [true, 'Please add text']
        },   
        description: {
            type: String,
            required: [true, 'Please add a description']
        },
    }
)

module.exports = mongoose.model('GroupProject', groupProjectSchema)