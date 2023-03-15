const mongoose = require('mongoose')
const request = require('supertest')
require('dotenv').config()

const app = require('../index.js')
const User = require('../models/userModel')
const Project = require('../models/projectModel')

var MongoDB = process.env.TEST_MONGODB_URI

const testUser = {
    username: "testUsername",
    firstName: "testFirstName",
    lastName: "testLastName",
    email: "testEmail",
    password: "testPassword"
}

const testProject = {
    title: "test title",
    description: "test description",
}

// Test suite for the Task model
describe("Project model test", () => {

    beforeAll(async () => {
        await mongoose.connect(MongoDB)
        await User.create(testUser)
        
    })

    afterEach(async () => {
        await Project.deleteMany({})
    })

    afterAll(async () => {
        await User.deleteMany({})
        await mongoose.connection.close()
    })

    it("Has a module", () => {
        expect(Project).toBeDefined()
    })

    describe("Save project", () => {
        it("Saves a project to database", async () => {
            
            const user = await User.findOne({ username: "testUsername"})
            const id = user._id
            testProject.user = id
            testProject.members = [id]

            const project = await Project.create(testProject)
            
            expect(project.title).toEqual("test title")
            expect(project.description).toEqual("test description")
            expect(project.user).toEqual(id)
            expect(project.members).toEqual([id])
        })
    })

    describe("Get Project", () => {
        it("Gets a project from database", async () => {

            const user = await User.findOne({ username: "testUsername"})
            const id = user._id
            testProject.user = id
            testProject.members = [id]

            const project = await Project.create(testProject)
            const foundProject = await Project.findOne({ title: project.title})
            
            expect(foundProject.title).toEqual(project.title)
            expect(foundProject.description).toEqual(project.description)
            expect(foundProject.user).toEqual(project.user)
            expect(foundProject.members).toEqual(project.members)
        })
    })

    describe("Update project", () => {
        it("Updates a project in the database", async () => {
            
            const user = await User.findOne({ username: "testUsername"})
            const id = user._id
            testProject.user = id
            testProject.members = [id]

            const project = await Project.create(testProject)
            const projectId = project._id

            await Project.findByIdAndUpdate(projectId, {
                title: "updated test title",
                description: "updated test description"
            })
            const foundProject = await Project.findById(projectId)


            const expectedTitle = "updated test title"
            const expectedDescription = "updated test description"
            expect(foundProject.title).toEqual(expectedTitle)
            expect(foundProject.description).toEqual(expectedDescription)
        })
    })

    describe("Delete Project", () => {
        it("Deletes a project from database", async () => {
            
            const user = await User.findOne({ username: "testUsername"})
            const id = user._id
            testProject.user = id
            testProject.members = [id]

            const project = await Project.create(testProject)
            const projectId = project._id

            expect(project).toBeDefined()

            await Project.findByIdAndDelete(projectId)
            const foundProject = await Project.findById(projectId)

            expect(foundProject).toBeNull()
        })
    })
})