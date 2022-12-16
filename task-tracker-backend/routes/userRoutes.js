const express = require('express')
const { getUser, loginUser, registerUser, updateUser, changePassword } = require('../controllers/userController')

const router = express.Router()

const { protect } = require('../middleware/authenticationMiddleware')
const loginAttemptLimiter = require('../middleware/loginAttemptLimiter')
 
router.post('/', registerUser)
router.post('/login', loginAttemptLimiter, loginUser)
router.post('/me', protect, getUser)
router.route('/update').put(protect, updateUser)
router.route('/change-password').put(protect, changePassword)


module.exports = router