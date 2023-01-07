const express = require('express')
const { readComments, createComment, updateComment, deleteComment } = require('../controllers/commentController')

const router = express.Router()

const { protect } = require('../middleware/authenticationMiddleware')

router.route('/').post(protect, createComment).get( readComments)
router.route('/:id').put(protect, updateComment).delete(protect, deleteComment)

module.exports = router