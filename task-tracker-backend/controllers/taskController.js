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
            deadline: req.body.deadline,
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


module.exports = {
    readTasks,
    createTask,
    updateTask,
    deleteTask,
}