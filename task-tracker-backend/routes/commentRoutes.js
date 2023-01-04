const express = require('express')
const { readComment, createComment, updateComment, deleteComment } = require('../controllers/taskController')

const router = express.Router()

const { protect } = require('../middleware/authenticationMiddleware')

router.route('/').post(protect, createComment).get(protect, readComment)
router.route('/:id').put(protect, updateComment).delete(protect, deleteComment)

module.exports = router