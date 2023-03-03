const asyncHandler = require('express-async-handler')

const Project = require('../models/projectModel')
const User = require('../models/userModel')


// @desc        Read Projects
// @route       GET /api/projects
// @access      Private
const readProjects = asyncHandler(async (req, res) => {
    try {
        const project = await Project.find({ user: req.user.id})
        res.status(200).json(project)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

})

// @desc        Create Project
// @route       POST /api/projects
// @access      Private
const createProject = asyncHandler(async (req, res) => {
    try {
        if(!req.body.title || !req.body.description) {
            console.log('no title or description')
            res.status(400)
            throw new Error('Please fill out all fields!')
        }
        const project = await Project.create({
            title: req.body.title,
            description: req.body.description,
            user: req.user.id,
            members: req.user.id,
        })
        res.status(200).json(project)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// @desc        Update Project
// @route       PUT /api/projects/:id
// @access      Private
const updateProject = asyncHandler(async (req, res) => {

    try {
        const project = await Project.findById(req.params.id)
        if(!project) {
            res.status(400)
            throw new Error("Project not found")
        }
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
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
    
})

// @desc        Delete Project
// @route       DELETE /api/projects/:id
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

// @desc        Add member to project
// @route       PUT /api/projects/:id/members
// @access      Private
const addProjectMember = asyncHandler(async (req, res) => {
    const { projectId } = req.body
    const { username } = req.body
    // console.log(req.body)

    try {
        const user = await User.find({ username: username})
        // console.log(user)
        if(!user) {
            return res.status(404).json({message: "User not found"})
        }
        
        // Add code to check if member is already in project

        const project = await Project.updateOne(
            { _id: projectId },
            { $push: { members: user } }
        );

        res.status(200).json(project)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

// @desc        Get information about a project
// @route       PUT /api/projects/:id
// @access      Private
const getProject = asyncHandler(async (req, res) => {
    // console.log(req.params)
    const project = await Project.findById(req.params.id)
    
    const projectCreator = await User.findById(project.user)
    // console.log(project)
    const projectObject = {
        projectCreator: projectCreator.firstName + " " + projectCreator.lastName,
        title: project.title,
        description: project.description,
    }

    const members = project.members

    const membersInfo = await User.find(
        { _id: {$in: members}},
        { firstName: 1, lastName: 1, username: 1, email: 1, role: 1, _id: 0 }
    )
    // console.log(membersInfo)

    const resultArray = []
    resultArray.push(projectObject)
    resultArray.push(membersInfo)

    if(project && membersInfo) {
        res.status(200).send(resultArray)
    } else {
        res.status(404).send("Project not found")
    }

    
})

module.exports = {
    readProjects,
    createProject,
    updateProject,
    deleteProject,
    addProjectMember,
    getProject,
}