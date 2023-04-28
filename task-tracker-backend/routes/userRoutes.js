const express = require('express')
const { loginUser, registerUser, updateUser, changePassword, changeProfilePicture, getAllUsers, changeRole, getUserInformation, updateUserUsername, updateUserFirstName, updateUserLastName, updateUserEmail } = require('../controllers/userController')

const router = express.Router()

const { protect } = require('../middleware/authenticationMiddleware')
const loginAttemptLimiter = require('../middleware/loginAttemptLimiter')
 
router.post('/', registerUser)
router.post('/login', loginAttemptLimiter, loginUser)
router.route('/get-user-information').post(protect, getUserInformation)
router.route('/get-all-users').get(protect, getAllUsers)
router.route('/update').put(protect, updateUser)
router.route('/:id/update-user-username').put(protect, updateUserUsername)
router.route('/:id/update-user-firstName').put(protect, updateUserFirstName)
router.route('/:id/update-user-lastName').put(protect, updateUserLastName)
router.route('/:id/update-user-email').put(protect, updateUserEmail)
router.route('/change-password').put(protect, changePassword)
router.route('/change-role').put(protect, changeRole)
router.route('/change-profile-picture').put(protect, changeProfilePicture)


module.exports = router