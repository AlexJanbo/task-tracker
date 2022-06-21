import mongoose from 'mongoose'

const taskSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        Title: {
            type: String,
            required: [true, "Please add a text title"]
        },
        Description: {
            type: String,

        },
        
    }
)