const path = require('path')
const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const fileUpload = require('express-fileupload')


const app = express()


const PORT = process.env.PORT || 4000

connectDB()




// app.use(cors(corsOptions))
app.use(express.json({limit: "5mb"}))
app.use(express.urlencoded({ limit: "5mb", extended: false, parameterLimit: 5000}))


app.use('/api/tasks', require('./routes/taskRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/projects', require('./routes/projectRoutes'))
app.use('/api/comments', require('./routes/commentRoutes'))




app.use(errorHandler)

// if(process.env.NODE_ENV !== 'test') {
//     app.listen(PORT, () => {
//         console.log(`Server started on port: ${PORT}`)
//     })
// }

module.exports = app