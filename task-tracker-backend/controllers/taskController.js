const asyncHandler = require('express-async-handler')

const Task = require('../models/taskModel')
const User = require('../models/userModel')


// @desc        Read Tasks
// @route       GET /api/tasks
// @access      Private
const readTasks = asyncHandler(async (req, res) => {
    const task = await Task.find({ user: req.user.id})

    res.status(200).json(task)
})

// @desc        Create Task
// @route       POST /api/tasks
// @access      Private
const createTask = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field!')
    }
    const task = await Task.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(task)
})

// @desc        Update Task
// @route       PUT /api/tasks
// @access      Private
const updateTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if(!task) {
        res.status(400)
        throw new Error("Task not found")
    }

    const user = User.findById(req.user.id)

    // Check for user
    if(!req.ser) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check if task belongs to user
    if(task.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedTask)
})

// @desc        Delete Task
// @route       DELETE /api/tasks
// @access      Private
const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if(!task) {
        res.status(400)
        throw new Error("Task not found")
    }

    const user = User.findById(req.user.id)

    // Check for user
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
})

module.exports = {
    readTasks,
    createTask,
    updateTask,
    deleteTask,
}