const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || 4000
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const app = require("./index.js")

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})