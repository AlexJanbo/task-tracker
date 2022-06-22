const express = require('express')
const { getUser, loginUser, registerUser } = require('../controllers/userController')

const router = express.Router()

const { protect } = require('../middleware/authenticationMiddleware')
 
router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/me', protect, getUser)


module.exports = router