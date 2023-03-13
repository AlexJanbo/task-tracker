const mongoose = require('mongoose')
const request = require('supertest')
require('dotenv').config()

const app = require('../index.js')
const User = require('../models/userModel')
const Task = require('../models/taskModel')

var MongoDB = process.env.TEST_MONGODB_URI

const testUser = {
    username: "testUsername",
    firstName: "testFirstName",
    lastName: "testLastName",
    email: "testEmail",
    password: "testPassword"
}

const testTask = {
    title: "test title",
    description: "test description",
    priority: "High",
    status: "Completed"
}

// Test suite for the Task model
describe("Task model test", () => {

    beforeAll(async () => {
        await mongoose.connect(MongoDB)
        await User.create(testUser)
        
    })

    afterEach(async () => {
        await Task.deleteMany({})
    })

    afterAll(async () => {
        await User.deleteMany({})
        await mongoose.connection.close()
    })

    it("Has a module", () => {
        expect(Task).toBeDefined()
    })

    describe("Save task", () => {
        it("Saves a task to database", async () => {
            
            const user = await User.findOne({ username: "testUsername"})
            testTask.user = user._id

            const task = await Task.create(testTask)
            
            expect(task.title).toEqual("test title")
            expect(task.description).toEqual("test description")
            expect(task.priority).toEqual("High")
            expect(task.status).toEqual("Completed")
        })
    })

    describe("Get Task", () => {
        it("Gets a task from database", async () => {

            const user = await User.findOne({ username: "testUsername"})
            testTask.user = user._id

            const task = await Task.create(testTask)
            const foundTask = await Task.findOne({ title: task.title})
            
            expect(foundTask.title).toEqual(task.title)
            expect(foundTask.description).toEqual(task.description)
            expect(foundTask.priority).toEqual(task.priority)
            expect(foundTask.status).toEqual(task.status)
        })
    })

    describe("Update task", () => {
        it("Updates a task in the database", async () => {
            
            const user = await User.findOne({ username: "testUsername"})
            testTask.user = user._id

            const task = await Task.create(testTask)
            const id = task._id

            await Task.findByIdAndUpdate(id, {
                title: "updated test title",
                description: "updated test description"
            })
            const foundTask = await Task.findById(id)


            const expectedTitle = "updated test title"
            const expectedDescription = "updated test description"
            const actualTitle = foundTask.title
            const actualDescription = foundTask.description
            expect(actualTitle).toEqual(expectedTitle)
            expect(actualDescription).toEqual(expectedDescription)
        })
    })

    describe("Delete Task", () => {
        it("Deletes a task from database", async () => {
            
            const user = await User.findOne({ username: "testUsername"})
            testTask.user = user._id

            const task = await Task.create(testTask)
            const id = task._id

            expect(task).toBeDefined()

            await Task.findByIdAndDelete(id)
            const foundTask = await Task.findById(id)

            expect(foundTask).toBeNull()
        })
    })
})