var mongoose = require("mongoose")
require('dotenv').config()

var MongoDB = process.env.TEST_MONGODB_URI
mongoose.connect(MongoDB)
const Project = require('../models/projectModel.js')
const User = require('../models/userModel.js')

const testUser = {
    username: "testUsername",
    firstName: "testFirstName",
    lastName: "testLastName",
    email: "testEmail",
    password: "testPassword"
}

describe("Project model test", () => {
    beforeAll(async () => {
        await Project.remove({})
        await User.remove({})
    })

    afterEach(async () => {
        await Project.remove({})
        await User.remove({})
    })

    afterAll(async () => {
        await mongoose.connection.close();
    })

    it("has a module", () => {
        expect(Project).toBeDefined()
    })

    describe("save project", () => {
        it("saves a project", async () => {
            const project = new Project({
                user: new User(testUser),
                title: "testTitle",
                description: "testDescription"
            })
            const savedProject = await project.save()
            const expected = "testTitle"
            const actual = savedProject.title
            expect(actual).toEqual(expected)
        })
    })

    describe("get project", () => {
        it("gets a project", async () => {
            const project = new Project({ 
                user: new User(testUser),
                title: "testTitle",
                description: "testDescription"
            })
            await project.save()
            const foundProject = await Project.findOne({ title: "testTitle"})
            const expected = "testTitle"
            const actual = foundProject.title
            expect(actual).toEqual(expected)
        })
    })

    describe("update project", () => {
        it("updates a project", async () => {
            const project = new Project({
                user: new User(testUser),
                title: "testTitle",
                description: "testDescription"
            })
            await project.save()

            project.title = "testTitleUpdate"
            const updatedProject = await project.save()

            const expected = "testTitleUpdate"
            const actual = updatedProject.title
            expect(actual).toEqual(expected)
        })
    })

    describe("delete user", () => {

    })
})