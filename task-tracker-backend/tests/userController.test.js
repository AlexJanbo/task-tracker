const mongoose = require('mongoose')
const request = require('supertest')
require('dotenv').config()

const app = require('../index.js')
const User = require('../models/userModel')

const { registerUser } = require('../controllers/userController')

var MongoDB = process.env.TEST_MONGODB_URI


const testUser = {
    username: "testUsername",
    firstName: "testFirstName",
    lastName: "testLastName",
    email: "testEmail",
    password: "testPassword"
}

// Test suite for the user controller
describe("Test the user API", () => {

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
    
    test('POST /users registerUser', async() => {
        const response = await request(app)
            .post('/api/users/')
            .send(testUser)
            .expect(201)
        expect(response.body.username).toEqual(testUser.username)

    })
    
    
    
    // beforeAll(async () => {
    //     await mongoose.connect(MongoDB)
    // })

    // afterEach(async () => {
    //     await User.deleteMany({})
    // })

    // afterAll(async () => {
    //     await mongoose.connection.close()
    // })

    // it("Has a module", () => {
    //     expect(User).toBeDefined()
    // })

    // describe("Register user", async () => {
    //     const user = registerUser(testUser)

    //     expect(user.username).toEqual("testUsername")
    //     expect(user.firstName).toEqual("testFirstName")
    //     expect(user.lastName).toEqual("testLastName")
    //     expect(user.email).toEqual("testEmail")
    //     expect(user.password).toEqual("testPassword")
    // })

})