const asyncHandler = require('express-async-handler')

const Project = require('../models/projectModel')
const User = require('../models/userModel')


// @desc        Read Projects
// @route       GET /api/projects
// @access      Private
const readProjects = asyncHandler(async (req, res) => {
    const project = await Project.find({ user: req.user.id})

    res.status(200).json(project)
})

// @desc        Create Project
// @route       POST /api/projects
// @access      Private
const createProject = asyncHandler(async (req, res) => {
    if(!req.body.title || !req.body.description) {
        console.log('no title or description')
        res.status(400)
        throw new Error('Please fill out all fields!')
    }

    const project = await Project.create({
        title: req.body.title,
        description: req.body.description,
        user: req.user.id
    })

    res.status(200).json(project)
})

// @desc        Update Project
// @route       PUT /api/projects
// @access      Private
const updateProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id)

    if(!project) {
        res.status(400)
        throw new Error("Project not found")
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check if project belongs to user
    if(project.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    if(!req.body.title || !req.body.description) {
        console.log('No title or description')
        res.status(400)
        throw new Error('Please fill out all fields!')
    }

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        user: req.user.id
    }, {new: true})

    res.status(200).json(updatedProject)
})

// @desc        Delete Project
// @route       DELETE /api/projects
// @access      Private
const deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id)

    if(!project) {
        res.status(400)
        throw new Error("Project not found")
    }


    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check if project belongs to user
    if(project.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await project.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    readProjects,
    createProject,
    updateProject,
    deleteProject,
}