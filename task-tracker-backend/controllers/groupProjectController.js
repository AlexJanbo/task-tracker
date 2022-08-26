const asyncHandler = require('express-async-handler')

const GroupProject = require('../models/groupProjectModel')
const User = require('../models/userModel')


// @desc        Read Group Projects
// @route       GET /api/group-projects
// @access      Private
const readGroupProjects = asyncHandler(async (req, res) => {
    const groupProject = await GroupProject.find({ user: req.user.id})

    res.status(200).json(groupProject)
})

// @desc        Create Group Project
// @route       POST /api/group-projects
// @access      Private
const createGroupProject = asyncHandler(async (req, res) => {
    if(!req.body.title || !req.body.description) {
        console.log('no title or description')
        res.status(400)
        throw new Error('Please fill out all fields!')
    }

    const groupProject = await GroupProject.create({
        title: req.body.title,
        description: req.body.description,
        user: req.user.id
    })

    res.status(200).json(groupProject)
})

// @desc        Update Group Project
// @route       PUT /api/group-projects
// @access      Private
const updateGroupProject = asyncHandler(async (req, res) => {
    const groupProject = await GroupProject.findById(req.params.id)

    if(!groupProject) {
        res.status(400)
        throw new Error("Project not found")
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check if task belongs to user
    if(groupProject.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    if(!req.body.title || !req.body.description) {
        console.log('No title or description')
        res.status(400)
        throw new Error('Please fill out all fields!')
    }

    const updatedGroupProject = await GroupProject.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        user: req.user.id
    }, {new: true})

    res.status(200).json(updatedGroupProject)
})

// @desc        Delete Group Project
// @route       DELETE /api/group-projects
// @access      Private
const deleteGroupProject = asyncHandler(async (req, res) => {
    const groupProject = await GroupProject.findById(req.params.id)

    if(!groupProject) {
        res.status(400)
        throw new Error("Project not found")
    }


    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check if task belongs to user
    if(groupProject.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await groupProject.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    readGroupProjects,
    createGroupProject,
    updateGroupProject,
    deleteGroupProject,
}