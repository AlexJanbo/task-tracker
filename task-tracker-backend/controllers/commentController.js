const asyncHandler = require('express-async-handler')

const Comment = require('../models/commentModel')
const Task = require('../models/taskModel')


// @desc        Read Comments
// @route       GET /api/comments
// @access      Private
const readComments = asyncHandler(async (req, res) => {
    const comment = await Comment.find({ task: req.task.id})

    res.status(200).json(comment)
})

// @desc        Create Comment
// @route       POST /api/comments
// @access      Private
const createComment = asyncHandler(async (req, res) => {
    
    // console.log(req.body)

    // Make sure that the comment has task id and valid description
    if(!req.body.id) {
        console.log("No Task Id")
        res.status(400)
        throw new Error("No Task Id")
    }

    if(!req.body.description) {
        console.log("No description")
        res.status(400)
        throw new Error("Please add a description")
    }

    const comment = await Comment.create({
        task: req.body.id,
        description: req.body.description,
    })

    res.status(200).json(comment)
})

// @desc        Update Comment
// @route       PUT /api/comments
// @access      Private
const updateComment = asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id)

    if(!comment) {
        res.status(400)
        throw new Error("Comment not found")
    }

    // Check for task
    if(!req.task) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check if task belongs to user
    // if(task.user.toString() !== req.user.id){
    //     res.status(401)
    //     throw new Error('User not authorized')
    // }

    if(!req.body.description) {
        console.log('no body text')
        res.status(400)
        throw new Error('Please fill out all fields!')
    }

    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, {
        description: req.body.description,
    }, {new: true})

    res.status(200).json(updatedComment)
})

// @desc        Delete Comment
// @route       DELETE /api/comments
// @access      Private
const deleteComment = asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id)

    if(!comment) {
        res.status(400)
        throw new Error("Comment not found")
    }


    // Check for user
    // if(!req.task) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // Check if task belongs to user
    // if(co.user.toString() !== req.user.id) {
    //     res.status(401)
    //     throw new Error('User not authorized')
    // }

    await comment.remove()

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    readComments,
    createComment,
    updateComment,
    deleteComment,
}