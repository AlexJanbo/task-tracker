const mongoose = require('mongoose')
const request = require('supertest')
require('dotenv').config()

const app = require('../index.js')
const User = require('../models/userModel')
const Task = require('../models/taskModel')
const Comment = require('../models/commentModel')

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

const testComment = {
    description: "test description"
}

// Test suite for the Task model
describe("Task model test", () => {

    beforeAll(async () => {
        await mongoose.connect(MongoDB)
        await User.create(testUser)
        
    })

    afterEach(async () => {
        await Comment.deleteMany({})
        await Task.deleteMany({})
    })

    afterAll(async () => {
        await User.deleteMany({})
        await mongoose.connection.close()
    })

    it("Has a module", () => {
        expect(Comment).toBeDefined()
    })

    describe("Save comment", () => {
        it("Saves a comment to database", async () => {
            
            const user = await User.findOne({ username: "testUsername"})
            const userId = user._id
            
            testTask.user = userId
            const task = await Task.create(testTask)
            const taskId = task._id

            testComment.task = taskId
            testComment.user = userId

            const comment = await Comment.create(testComment)
            
            expect(comment.description).toEqual("test description")
            expect(comment.user).toEqual(userId)
            expect(comment.task).toEqual(taskId)
        })
    })

    describe("Get Comment", () => {
        it("Gets a comment from database", async () => {

            const user = await User.findOne({ username: "testUsername"})
            const userId = user._id
            
            testTask.user = userId
            const task = await Task.create(testTask)
            const taskId = task._id

            testComment.task = taskId
            testComment.user = userId

            const comment = await Comment.create(testComment)
            const foundComment = await Comment.findOne({ description: "test description"})
            
            
            expect(foundComment.title).toEqual(comment.title)
            expect(foundComment.user).toEqual(comment.user)
            expect(foundComment.task).toEqual(comment.task)
        })
    })


    describe("Delete Comment", () => {
        it("Deletes a comment from database", async () => {
            
            const user = await User.findOne({ username: "testUsername"})
            const userId = user._id
            
            testTask.user = userId
            const task = await Task.create(testTask)
            const taskId = task._id

            testComment.task = taskId
            testComment.user = userId

            const comment = await Comment.create(testComment)
            expect(comment).toBeDefined()
            const commentId = comment._id

            await Comment.findByIdAndDelete(commentId)
            const foundComment = await Comment.findById(commentId)

            expect(foundComment).toBeNull()
        })
    })
})