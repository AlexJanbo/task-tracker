const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        text: {
            type: String,
            required: [true, 'Please add text']
        },   
        // description: {
        //     type: String,
        //     required: [true, 'Please add a description']
        // }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Task', taskSchema)