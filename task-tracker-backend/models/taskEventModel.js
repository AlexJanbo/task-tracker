const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const TaskEventTypes = {
    Task_Created: 'task-created',
    Task_Title_Updated: 'task-title-updated',
    Task_Description_Updated: 'task-description-updated',
    Task_Priority_Updated: 'task-priority-updated',
    Task_Status_Updated: 'task-status-updated',
    Task_Type_Updated: 'task-type-updated',
    Task_Deadline_Updated: 'task-deadline-updated',
    Task_Deleted: 'test-deleted'
}

const taskEventSchema = mongoose.Schema(
    {
        eventType: {
            type: String,
            required: true,
            enum: Object.values(TaskEventTypes)
        },
        taskId: {
            type: ObjectId,
            required: true,
            ref: 'Task'
        },
        userId: {
            type: ObjectId,
            required: true,
            ref: 'User'
        },
        timestamp: {
            type: Date,
            required: true,
            default: Date.now
        },
        data: {
            type: Object,
            required: true,
        }
    }
)

module.exports = mongoose.model('TaskEvent', taskEventSchema) 