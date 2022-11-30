const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (req, callback) => {
        if (allowedOrigins.indexOf(req.header("Origin")) !== -1 || !origin) {
            corsOptions = { origin: true }
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions 