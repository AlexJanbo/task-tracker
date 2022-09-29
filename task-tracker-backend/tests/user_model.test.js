var mongoose = require("mongoose")
require('dotenv').config()

var MongoDB = process.env.TEST_MONGODB_URI
mongoose.connect(MongoDB)
const User = require('../models/userModel.js')

const testUser = {
    username: "testUsername",
    firstName: "testFirstName",
    lastName: "testLastName",
    email: "testEmail",
    password: "testPassword"
}

describe("User model test", () => {
    beforeAll(async () => {
        await User.remove({})
    })

    afterEach(async () => {
        await User.remove({})
    })

    afterAll(async () => {
        await mongoose.connection.close();
    })

    it("has a module", () => {
        expect(User).toBeDefined()
    })

    describe("save user", () => {
        it("saves a user", async () => {
            const user = new User(testUser)
            const savedUser = await user.save()
            const expected = "testUsername"
            const actual = savedUser.username
            expect(actual).toEqual(expected)
        })
    })

    describe("get user", () => {
        it("gets a user", async () => {
            const user = new User(testUser)
            await user.save()
            const foundUser = await User.findOne({ username: "testUsername"})
            const expected = "testUsername"
            const actual = foundUser.username
            expect(actual).toEqual(expected)
        })
    })


    describe("update user", () => {
        it("updates a user", async () => {
            const user = new User(testUser)
            await user.save()

            user.username = "testUpdate"
            const updatedUser = await user.save()

            const expected = "testUpdate"
            const actual = updatedUser.username
            expect(actual).toEqual(expected)
        })
    })

    describe("delete user", () => {

    })
})