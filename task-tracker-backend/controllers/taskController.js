const asyncHandler = require('express-async-handler')

const Task = require('../models/taskModel')
const User = require('../models/userModel')


// @desc        Read Tasks
// @route       GET /api/tasks
// @access      Private
const readTasks = asyncHandler(async (req, res) => {
    try {
        const task = await Task.find({ user: req.user.id})
        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// @desc        Create Task
// @route       POST /api/tasks
// @access      Private
const createTask = asyncHandler(async (req, res) => {
    try {
        if(!req.body.title || !req.body.description || !req.body.priority || !req.body.status) {
            console.log('no body text')
            res.status(400)
            throw new Error('Please fill out all fields!')
        }
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            status: req.body.status,
            user: req.user.id
        })
        res.status(200).json(task)
    } catch (error) {
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
        if(!req.body.title) {
            console.log('no title')
            res.status(400)
            throw new Error('Please include the title!')
        }
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
        }, {new: true})
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// @desc        Update Task Description
// @route       PUT /api/tasks/:id/update-task-description
// @access      Private
const updateTaskDescription = asyncHandler(async (req, res) => {
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
        if(!req.body.description) {
            console.log('no description')
            res.status(400)
            throw new Error('Please include the description!')
        }
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            description: req.body.description,
        }, {new: true})
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// @desc        Update Task Priority
// @route       PUT /api/tasks/:id/update-task-priority
// @access      Private
const updateTaskPriority = asyncHandler(async (req, res) => {
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
        if(!req.body.priority) {
            console.log('no priority')
            res.status(400)
            throw new Error('Please include the priority!')
        }
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            priority: req.body.priority,
        }, {new: true})
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// @desc        Update Task Status
// @route       PUT /api/tasks/:id/update-task-status
// @access      Private
const updateTaskStatus = asyncHandler(async (req, res) => {
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
        if(!req.body.status) {
            console.log('no status')
            res.status(400)
            throw new Error('Please include the status!')
        }
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            status: req.body.status,
        }, {new: true})
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// @desc        Update Task Deadline
// @route       PUT /api/tasks/:id/update-task-deadline
// @access      Private
const updateTaskDeadline = asyncHandler(async (req, res) => {
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
        if(!req.body.deadline) {
            console.log('no prdeadline')
            res.status(400)
            throw new Error('Please include the prdeadline!')
        }
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            deadline: req.body.deadline,
        }, {new: true})
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// @desc        Delete Task
// @route       DELETE /api/tasks
// @access      Private
const deleteTask = asyncHandler(async (req, res) => {
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
        if(task.user.toString() !== req.user.id) {
            res.status(401)
            throw new Error('User not authorized')
        }
        await task.remove()
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