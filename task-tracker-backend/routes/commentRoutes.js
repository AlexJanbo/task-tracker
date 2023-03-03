const express = require('express')
const { readComments, createComment, deleteComment } = require('../controllers/commentController')

const router = express.Router()

const { protect } = require('../middleware/authenticationMiddleware')

router.route('/').post(protect, createComment).get(protect, readComments)
router.route('/:id').delete(protect, deleteComment)

module.exports = router