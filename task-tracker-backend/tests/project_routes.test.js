const index = require("../index.js")

const request = require("supertest")
const express = require("express")
const { italic } = require("colors")
const app = express()

app.use(express.urlencoded({ extended: false}))
app.use("/", index)

describe("Project routes testing", () => {
    describe("create project route test", () => {
        it("")
    })
})