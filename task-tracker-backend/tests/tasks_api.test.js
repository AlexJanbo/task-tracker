const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')

const api = supertest(app)

// Creating Tasks

// Getting Tasks

// Updating Tasks

// Deleting Tasks


test("can not get tasks without authorization", async () => {
    await api
        .get('/api/tasks')
        .expect(401)
        .expect('Content-Type', /application\/json/)
})

afterAll(() => {
    mongoose.connection.close()
})