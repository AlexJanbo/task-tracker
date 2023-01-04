const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const projectSchema = mongoose.Schema(
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
    }
)

module.exports = mongoose.model('Project', projectSchema)