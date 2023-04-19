const asyncHandler = require('express-async-handler')

const Task = require('../models/taskModel')
const User = require('../models/userModel')
const { createTaskEvent, getTaskHistoryById } = require('./taskEventController')


// @desc        Read Tasks
// @route       GET /api/tasks
// @access      Private
const readTasks = asyncHandler(async (req, res) => {
    try {
        const task = await Task.find({ user: req.user.id}).sort({ createdAt: -1})
        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// @desc        Read Single Task
// @route       GET /api/tasks/:id
// @access      Private
const getIndividualTask = asyncHandler(async (req, res) => {
    try {
        
        // Get the task id from the input parameters
        const taskId = req.params.id

        // Find the task from the database
        const task = await Task.findOne({ _id:  taskId})

        // Get task event history
        const event = await getTaskHistoryById(taskId)

        // Since I want to send back both the task information and task event history to the front end
        // I can combine them into a response object and send that back instead
        let response = {
            task: task,
            event: event
        }
        
        // Send back success message and response object to front end
        res.status(200).json(response)


    } catch (error) {
        // res.status(404).json({ message: error.message })
    }
})


// @desc        Create Task
// @route       POST /api/tasks
// @access      Private
const createTask = asyncHandler(async (req, res) => {
    try {

        // Validate the input data
        if(!req.body.title || !req.body.description || !req.body.priority || !req.body.status) {
            console.log('no body text')
            res.status(400)
            throw new Error('Please fill out all fields!')
        }

        // Create a new task
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            user: req.user.id
        })

        //Create a Task_Created event
        await createTaskEvent('task-created', task._id, req.user.id, {
            ...task
        })

        // Respond to front end with success message and the task
        res.status(200).json(task)


    } catch (error) {

        // Catch and display any error
        res.status(404).json({ message: error.message })
    }

})

// @desc        Update Task
// @route       PUT /api/tasks
// @access      Private
const updateTask = asyncHandler(async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        if(!task) {
            res.status(400)
            throw new Error("Task not found")
        }
        if(!req.user) {
            res.status(401)
            throw new Error('User not found')
        }
        // Check if task belongs to user
        if(task.user.toString() !== req.user.id){
            res.status(401)
            throw new Error('User not authorized')
        }
        if(!req.body.title || !req.body.description || !req.body.priority || !req.body.status) {
            console.log('no body text')
            res.status(400)
            throw new Error('Please fill out all fields!')
        }
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            status: req.body.status,
            deadline: req.body.deadline,
            user: req.user.id
        }, {new: true})
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})


// @desc        Update Task Title
// @route       PUT /api/tasks/:id/update-task-title
// @access      Private
const updateTaskTitle = asyncHandler(async (req, res) => {
    try {

        // Search the database for the task
        const task = await Task.findById(req.params.id)

        // Save old title for event sourcing
        const oldTitle = task.title

        // Make sure we have task and user
        if(!task) {
            res.status(400)
            throw new Error("Task not found")
        }
        if(!req.user) {
            res.status(401)
            throw new Error('User not found')
        }

        // Check if task belongs to user
        if(task.user.toString() !== req.user.id){
            res.status(401)
            throw new Error('User not authorized')
        } 

        // Validate the input
        if(!req.body.title) {
            console.log('no title')
            res.status(400)
            throw new Error('Please include the title!')
        }

        // Update the task with input
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
        }, {new: true})

        //Create a Task_Title_Updated event
        await createTaskEvent('task-title-updated', task._id, req.user.id, {
            oldValue: oldTitle,
            newValue: updatedTask.title
        })

        // Respond to front end with success message and the task
        res.status(200).json(updatedTask)

    } catch (error) {

        // Catch and display any error
        res.status(404).json({ message: error.message })
    }
})


// @desc        Update Task Description
// @route       PUT /api/tasks/:id/update-task-description
// @access      Private
const updateTaskDescription = asyncHandler(async (req, res) => {
    try {

        // Search the database for the task
        const task = await Task.findById(req.params.id)

        // Save old description for event sourcing
        const oldDescription = task.description

        // Make sure we have task and user
        if(!task) {
            res.status(400)
            throw new Error("Task not found")
        }
        if(!req.user) {
            res.status(401)
            throw new Error('User not found')
        }

        // Check if task belongs to user
        if(task.user.toString() !== req.user.id){
            res.status(401)
            throw new Error('User not authorized')
        } 

        // Validate the input
        if(!req.body.description) {
            console.log('no description')
            res.status(400)
            throw new Error('Please include the description!')
        }

        // Update the task with input
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            description: req.body.description,
        }, {new: true})

        //Create a Task_Description_Updated event
        await createTaskEvent('task-description-updated', task._id, req.user.id, {
            oldValue: oldDescription,
            newValue: updatedTask.description
        })

        // Respond to front end with success message and the task
        res.status(200).json(updatedTask)
    } catch (error) {

        // Catch and display any error
        res.status(404).json({ message: error.message })
    }
})


// @desc        Update Task Priority
// @route       PUT /api/tasks/:id/update-task-priority
// @access      Private
const updateTaskPriority = asyncHandler(async (req, res) => {
    try {
        
        // Search the database for the task
        const task = await Task.findById(req.params.id)

        // Save old priority for event sourcing
        const oldPriority = task.priority
        
        // Make sure we have task and user
        if(!task) {
            res.status(400)
            throw new Error("Task not found")
        }
        if(!req.user) {
            res.status(401)
            throw new Error('User not found')
        }
        // Check if task belongs to user
        if(task.user.toString() !== req.user.id){
            res.status(401)
            throw new Error('User not authorized')
        } 
        
        // Validate the input
        if(!req.body.priority) {
            console.log('no priority')
            res.status(400)
            throw new Error('Please include the priority!')
        }
        
        // Update the task with input
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            priority: req.body.priority,
        }, {new: true})
        
        //Create a Task_Priority_Updated event
        await createTaskEvent('task-priority-updated', task._id, req.user.id, {
            oldValue: oldPriority,
            newValue: updatedTask.priority
        })
        
        // Respond to front end with success message and the task
        res.status(200).json(updatedTask)

    } catch (error) {

        // Catch and display any error
        res.status(404).json({ message: error.message })
    }
})


// @desc        Update Task Status
// @route       PUT /api/tasks/:id/update-task-status
// @access      Private
const updateTaskStatus = asyncHandler(async (req, res) => {
    
    
    try {
        
        // Search the database for the task
        const task = await Task.findById(req.params.id)

        // Save old status for event sourcing
        const oldStatus = task.status
        
        // Make sure we have task and user
        if(!task) {
            res.status(400)
            throw new Error("Task not found")
        }
        if(!req.user) {
            res.status(401)
            throw new Error('User not found')
        }
        // Check if task belongs to user
        if(task.user.toString() !== req.user.id){
            res.status(401)
            throw new Error('User not authorized')
        } 
        
        // Validate the input
        if(!req.body.status) {
            console.log('no status')
            res.status(400)
            throw new Error('Please include the status!')
        }
        
        // Update the task with input
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            status: req.body.status,
        }, {new: true})
        
        //Create a Task_Status_Updated event
        await createTaskEvent('task-status-updated', task._id, req.user.id, {
            oldValue: oldStatus,
            newValue: updatedTask.status
        })
        
        // Respond to front end with success message and the task
        res.status(200).json(updatedTask)
    } catch (error) {
        
        // Catch and display any error
        res.status(404).json({ message: error.message })
    }
})


// @desc        Update Task Deadline
// @route       PUT /api/tasks/:id/update-task-deadline
// @access      Private
const updateTaskDeadline = asyncHandler(async (req, res) => {
    try {

        // Search the database for the task
        const task = await Task.findById(req.params.id)

        // Save old deadline for event sourcing
        const oldDeadline = task.deadline
        
        // Make sure we have task and user
        if(!task) {
            res.status(400)
            throw new Error("Task not found")
        }
        if(!req.user) {
            res.status(401)
            throw new Error('User not found')
        }
        // Check if task belongs to user
        if(task.user.toString() !== req.user.id){
            res.status(401)
            throw new Error('User not authorized')
        } 
        
        // Validate the input
        if(!req.body.deadline) {
            console.log('no deadline')
            res.status(400)
            throw new Error('Please include the deadline!')
        }
        
        // Update the task with input
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            deadline: req.body.deadline,
        }, {new: true})
        
        //Create a Task_Description_Updated event
        await createTaskEvent('task-deadline-updated', task._id, req.user.id, {
            oldValue: oldDeadline,
            newValue: updatedTask.deadline
        })
        
        // Respond to front end with success message and the task
        res.status(200).json(updatedTask)
    } catch (error) {
        
        // Catch and display any error
        res.status(404).json({ message: error.message })
    }
})

// @desc        Delete Task
// @route       DELETE /api/tasks
// @access      Private
const deleteTask = asyncHandler(async (req, res) => {
    try {

        // Search the database for the task
        const task = await Task.findById(req.params.id)

        // Make sure we have task and user
        if(!task) {
            res.status(400)
            throw new Error("Task not found")
        }
        if(!req.user) {
            res.status(401)
            throw new Error('User not found')
        }
        // Check if task belongs to user
        if(task.user.toString() !== req.user.id) {
            res.status(401)
            throw new Error('User not authorized')
        }

        // Remove task from database
        await task.remove()

        //Create a Task_Deleted_Updated event
        await createTaskEvent('task-deleted', task._id, req.user.id, {
            ...updatedTask
        })

        // Respond to front end with success message and the id of deleted task
        res.status(200).json({ id: req.params.id })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

const getUrgentTasks = asyncHandler(async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id, status: {$ne: 'Completed'}, deadline: { $exists: true}}).sort({ deadline: -1}).limit(3)
        res.status(200).json(tasks)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})


module.exports = {
    readTasks,
    getIndividualTask,
    createTask,
    updateTask,
    updateTaskTitle,
    updateTaskDescription,
    updateTaskPriority,
    updateTaskStatus,
    updateTaskDeadline,
    deleteTask,
    getUrgentTasks,
}