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

    // Tests registerUser
    test('POST /users registerUser', async() => {
        

        const response = await request(app)
            .post('/api/users/')
            .send(testUser)
            .expect(201)
        expect(response.body.username).toEqual(testUser.username)

    })


    // Tests loginUser
    test('POST /users/login loginUser', async() => {
        
        await request(app)
            .post('/api/users/')
            .send(testUser)

        const response = await request(app)
            .post('/api/users/login/')
            .send({ email: "testEmail",password: "testPassword"})
            .expect(200)

        expect(response.body.username).toEqual(testUser.username)

    })

    // Tests update user
    test('PUT /users/update updateUser', async() => {
        let token
        
        await request(app)
            .post('/api/users/')
            .send(testUser)

        const loginResponse = await request(app)
            .post('/api/users/login/')
            .send({ email: "testEmail",password: "testPassword"})
        token = loginResponse.body.token
        console.log(token)
        const user = await User.findOne({ username: "testUsername" })
        console.log(user)

        const headers = {
            Authorization: `Bearer ${token}`,
        }

        const Payload = {
            body: {
                username: "testUpdatedUsername"
            },
        }


        await request(app)
            .put('/api/users/update/')
            .set(headers)
            .set(user)
            .send( { username: "testUpdatedUsername"})
            .expect(200)
        expect(response.body.username).toEqual("testUpdatedUsername")

    })




    // Make a test for spamming logins to test middleware
    
    
    
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