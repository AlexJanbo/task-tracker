import urlencoded from 'express'
import colors from 'colors'
import express from ' express'
import dotenv from 'dotenv'
import { errorHandler } from '../middleware/errorMiddleware.js'
import connectDB from './config/db.js'

const PORT = process.env || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/tasks', require('./routes/taskRoutes'))
app.use('/api/users', require('./routes/taskRoutes'))

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})