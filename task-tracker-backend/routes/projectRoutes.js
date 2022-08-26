const express = require('express')
const { readProjects, createProject, updateProject, deleteProject } = require('../controllers/projectController')

const router = express.Router()

const { protect } = require('../middleware/authenticationMiddleware')

router.route('/').post(protect, createProject).get(protect, readProjects)
router.route('/:id').put(protect, updateProject).delete(protect, deleteProject)

module.exports = router