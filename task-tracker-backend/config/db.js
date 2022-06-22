const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true})

        console.log(`MongoDB successfully connected at:${con.connection.host}`.cyan)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB