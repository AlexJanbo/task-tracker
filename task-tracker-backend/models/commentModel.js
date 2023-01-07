const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const commentSchema = mongoose.Schema(
    {
        user: {
            type: ObjectId,
            required: true,
            ref: "User"
        },
        task: {
            type: ObjectId,
            required: true,
            ref: "Task"
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Comment', commentSchema)