const express = require('express')
const { readGroupProjects, createGroupProject, updateGroupProject, deleteGroupProject } = require('../controllers/groupProjectController')

const router = express.Router()

const { protect } = require('../middleware/authenticationMiddleware')

router.route('/').post(protect, createGroupProject).get(protect, readGroupProjects)
router.route('/:id').put(protect, updateGroupProject).delete(protect, deleteGroupProject)

module.exports = router