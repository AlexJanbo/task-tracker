var mongoose = require("mongoose")
require('dotenv').config()

var MongoDB = process.env.TEST_MONGODB_URI
mongoose.connect(MongoDB)
const Task = require('../models/taskModel.js')
const User = require('../models/userModel.js')

const testUser = {
    username: "testUsername",
    firstName: "testFirstName",
    lastName: "testLastName",
    email: "testEmail",
    password: "testPassword"
}

describe("Task model test", () => {
    beforeAll(async () => {
        await Task.remove({})
        await User.remove({})
    })

    afterEach(async () => {
        await Task.remove({})
        await User.remove({})
    })

    afterAll(async () => {
        await mongoose.connection.close();
    })

    it("has a module", () => {
        expect(Task).toBeDefined()
    })

    describe("save task", () => {
        it("saves a task", async () => {
            const task = new Task({
                user: new User(testUser),
                title: "testTitle",
                description: "testDescription",
                priority: "testPriority",
                status: "testStatus"
            })
            const savedTask = await task.save()
            const expected = "testTitle"
            const actual = savedTask.title
            expect(actual).toEqual(expected)
        })
    })

    describe("get task", () => {
        it("gets a task", async () => {
            const task = new Task({ 
                user: new User(testUser),
                title: "testTitle",
                description: "testDescription",
                priority: "testPriority",
                status: "testStatus"
            })
            await task.save()
            const foundTask = await Task.findOne({ title: "testTitle"})
            const expected = "testTitle"
            const actual = foundTask.title
            expect(actual).toEqual(expected)
        })
    })


    describe("update task", () => {
        it("updates a task", async () => {
            const task = new Task({
                user: new User(testUser),
                title: "testTitle",
                description: "testDescription",
                priority: "testPriority",
                status: "testStatus"
            })
            await task.save()

            task.title = "testTitleUpdate"
            const updatedTask = await task.save()

            const expected = "testTitleUpdate"
            const actual = updatedTask.title
            expect(actual).toEqual(expected)
        })
    })

    describe("delete user", () => {

    })
})