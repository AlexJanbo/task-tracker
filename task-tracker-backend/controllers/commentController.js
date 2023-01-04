const asyncHandler = require('express-async-handler')

const Comment = require('..models/commentModel')
const Task = require('../models/taskModel')


// @desc        Read Comments
// @route       GET /api/comments
// @access      Private
const readComments = asyncHandler(async (req, res) => {
    const comment = await Comment.find({ user: req.text.id})

    res.status(200).json(comment)
})

// @desc        Create Comment
// @route       POST /api/comments
// @access      Private
const createComments = asyncHandler(async (req, res) => {
    if(!req.body.text ) {
        console.log('no body text')
        res.status(400)
        throw new Error('Please fill out all fields!')
    }

    const comment = await Comment.create({
        task: req.task.id,
        text: req.body.text,
    })

    res.status(200).json(comment)
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