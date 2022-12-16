const rateLimit = require('express-rate-limit')

const loginAttemptLimiter = rateLimit({
    
    windowsMs: 60 * 1000, // 1 minute
    max: 10, // Limit each IP to 10 login requests per minute per window
    message: { message: "Please try again later"},
    handler: (req, res, next, options) => {
        res.status(options.statusCode).send(options.message)
    },
    standardHeaders: true, // Returns rate limit in header
    legacyHeaders: false, // Disable X-RateLimit
})

module.exports = loginAttemptLimiter