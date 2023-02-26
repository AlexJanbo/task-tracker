const express = require('express')
const { readProjects, createProject, updateProject, deleteProject, addProjectMember, getProject } = require('../controllers/projectController')

const router = express.Router()

const { protect } = require('../middleware/authenticationMiddleware')

router.route('/').post(protect, createProject).get(protect, readProjects)
router.route('/:id').put(protect, updateProject).delete(protect, deleteProject).get(protect, getProject)
router.route('/:id/members').post(protect, addProjectMember)

module.exports = router