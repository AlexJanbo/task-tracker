const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')

const api = supertest(app)

describe("POST /users", () => {

    describe("given a valid username and password", () => {
        // should save the username and password to the database
        // should respond with with a json object containing the user id
        test("should respond with a 201 status code", async () => {
             const response = await request(app.post("/api/users").send({
                username: "testUsername",
                firstName: "testFirstName",
                lastName: "testLastName",
                email: "testEmail",
                password: "testPassword"
            }))
            expect(response.statusCode).toBe(201)
        })
        // should specify json in the content type header

    })

    describe("missing username or password", () => {
        // should respond with a status code of 400
    })

})

afterAll(() => {
    mongoose.connection.close()
})