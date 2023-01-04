const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const commentSchema = mongoose.Schema(
    {
        task: {
            type: ObjectId,
            ref: "Task"
        },
        text: {
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