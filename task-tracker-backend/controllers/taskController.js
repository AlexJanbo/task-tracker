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

    // Check for user
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
        user: req.user.id
    }, {new: true})

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

// @desc        Add Task Comment
// @route       PUT /api/tasks/comment/:id
// @access      Private
const addTaskComment = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)
    console.log(task)

    const comment = {
        text: req.body.comment,
        postedBy: req.user.id
    }

    if(!task) {
        res.status(400)
        throw new Error("Task not found")
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(!req.body.comment) {
        console.log('no body text')
        res.status(400)
        throw new Error('Please fill out all fields!')
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
        $push: {comments: comment}
    }, {new: true})

    res.status(200).json(updatedTask)
})

module.exports = {
    readTasks,
    createTask,
    updateTask,
    deleteTask,
    addTaskComment,
}