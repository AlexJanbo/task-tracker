const asyncHandler = require('express-async-handler')

const Comment = require('../models/commentModel')
const Task = require('../models/taskModel')


// @desc        Read Comments
// @route       GET /api/comments
// @access      Private
const readComments = asyncHandler(async (req, res) => {
    try {
        const comment = await Comment.find({ user: req.user.id})
        // console.log(comment)
        res.status(200).json(comment)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// @desc        Create Comment
// @route       POST /api/comments
// @access      Private
const createComment = asyncHandler(async (req, res) => {
    try {
        if(!req.user._id) {
            res.status(400).send("Invalid user")
            throw new Error("Invalid user")
        }
        if(!req.body.id) {
            res.status(400).send("No task id")
            throw new Error("No Task Id")
        }
        if(!req.body.description) {
            res.status(400).send("No description")
            throw new Error("Please add a description")
        }
        const comment = await Comment.create({
            user: req.user._id,
            task: req.body.id,
            description: req.body.description,
            image: req.body.image,
        })
        res.status(200).json(comment)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }   
})

// @desc        Delete Comment
// @route       DELETE /api/comments
// @access      Private
const deleteComment = asyncHandler(async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id)
        if(!comment) {
            res.status(400)
            throw new Error("Comment not found")
        }
        await comment.remove()

        res.status(200).json({ id: req.params.id })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})


module.exports = {
    readComments,
    createComment,
    deleteComment,
}