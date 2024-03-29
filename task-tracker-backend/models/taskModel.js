const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

TaskPriorityTypes = {
    High: "High",
    Medium: "Medium",
    Low: "Low"
}

TaskStatusTypes = {
    Created: "Created",
    InProgress: "InProgress",
    Completed: "Completed",
}

TaskType = {
    Feature: "Feature",
    Refactor: "Refactor",
    BugFix: "Bug Fix",
    Documentation: "Documentation",
    Test: "Test",
    Misc: "Misc"
}

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
            enum: Object.values(TaskPriorityTypes),
            required: [true, 'Please add a priority']
        },
        status: {
            type: String,
            required: [true, 'Please add a status'],
            enum: Object.values(TaskStatusTypes),
            default: "Created"
        },
        type: {
            type: String,
            required: [true, 'Please add a type'],
            enum: Object.values(TaskType)
        },
        deadline: {
            type: Date
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Task', taskSchema)