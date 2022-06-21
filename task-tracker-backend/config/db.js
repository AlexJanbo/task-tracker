import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.DATABASE_URI)

        console.log(`MongoDB successfully connected at:${con.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB