const express = require('express')
const { readTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController')

const router = express.Router()

const { protect } = require('../middleware/authenticationMiddleware')

router.route('/').post(protect, createTask).get(protect, readTasks)
router.route('/:id').put(protect, updateTask).delete(protect, deleteTask)

module.exports = router