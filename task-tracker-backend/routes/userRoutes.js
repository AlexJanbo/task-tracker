const express = require('express')
const { getUser, loginUser, registerUser, updateUser, changePassword, changeProfilePicture, getAllUsers, changeRole } = require('../controllers/userController')

const router = express.Router()

const { protect } = require('../middleware/authenticationMiddleware')
const loginAttemptLimiter = require('../middleware/loginAttemptLimiter')
 
router.post('/', registerUser)
router.post('/login', loginAttemptLimiter, loginUser)
router.post('/me', protect, getUser)
router.route('/get-all-users').get(protect, getAllUsers)
router.route('/update').put(protect, updateUser)
router.route('/change-password').put(protect, changePassword)
router.route('/change-role').put(protect, changeRole)
router.route('/change-profile-picture').put(protect, changeProfilePicture)


module.exports = router