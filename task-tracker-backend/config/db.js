const mongoose = require('mongoose')

const MONGODB_URI = process.env.NODE_ENV === 'test' ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI

const connectDB = async () => {
    try {
        const con = await mongoose.connect(MONGODB_URI, { useNewUrlParser: true})

        console.log(`MongoDB successfully connected at:${con.connection.host}`.cyan)
    }
     catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB