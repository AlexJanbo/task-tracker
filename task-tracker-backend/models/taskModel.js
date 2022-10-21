const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const taskSchema = mongoose.Schema(
    {
        user: {
            type: ObjectId,
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
        },
        comments: {
            type: String,
            postedBy: {type: ObjectId, ref: "User"}
            
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Task', taskSchema)