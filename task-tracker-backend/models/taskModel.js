const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
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
        priority: {
            type: String,
            required: [true, 'Please add a priority']
        },
        status: {
            type: String,
            required: [true, 'Please add a status']
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Task', taskSchema)