const mongoose = require('mongoose')
const request = require('supertest')
require('dotenv').config()

const app = require('../index.js')
const User = require('../models/userModel')

var MongoDB = process.env.TEST_MONGODB_URI


const testUser = {
    username: "testUsername",
    firstName: "testFirstName",
    lastName: "testLastName",
    email: "testEmail",
    password: "testPassword"
}

// Test suite for the user model
describe("User model test", () => {
    beforeAll(async () => {
        await mongoose.connect(MongoDB)
    })

    afterEach(async () => {
        await User.deleteMany({})
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })

    it("Has a module", () => {
        expect(User).toBeDefined()
    })

    describe("Save user", () => {
        it("Saves a user", async () => {
            const user = await User.create(testUser)
            
            expect(user.username).toEqual("testUsername")
            expect(user.firstName).toEqual("testFirstName")
            expect(user.lastName).toEqual("testLastName")
            expect(user.email).toEqual("testEmail")
            expect(user.password).toEqual("testPassword")
        })
    })

    describe("Get user", () => {
        it("Gets a user", async () => {
            const user = await User.create(testUser)
            const id = user._id

            const foundUser = await User.findOne({ _id: id})
            
            const expected = "testUsername"
            const actual = foundUser.username
            expect(actual).toEqual(expected)
        })
    })

    describe("Update user", () => {
        it("Updates a user", async () => {
            const user = await User.create(testUser)
            const id = user._id

            await User.findByIdAndUpdate(id, {
                username: "updatedTestUsername"
            })
            const foundUser = await User.findById(id)


            const expected = "updatedTestUsername"
            const actual = foundUser.username
            expect(actual).toEqual(expected)
        })
    })

    describe("Delete user", () => {
        it("Deletes a user", async () => {
            const user = await User.create(testUser)
            const id = user._id

            await User.findByIdAndDelete(id)
            const foundUser = await User.findById(id)

            expect(foundUser).toBeNull()
        })
    })
        

})




