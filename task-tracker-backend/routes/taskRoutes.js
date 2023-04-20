const express = require('express')
const { readTasks, createTask, updateTask, deleteTask, getUrgentTasks, updateTaskTitle, updateTaskDescription, updateTaskPriority, updateTaskStatus, updateTaskDeadline, getIndividualTask, updateTaskType, getCompletedTasks } = require('../controllers/taskController')

const router = express.Router()

const { protect } = require('../middleware/authenticationMiddleware')

router.route('/').post(protect, createTask).get(protect, readTasks)
router.route('/:id').get(protect, getIndividualTask).put(protect, updateTask).delete(protect, deleteTask)
router.route('/:id/update-task-title').put(protect, updateTaskTitle)
router.route('/:id/update-task-description').put(protect, updateTaskDescription)
router.route('/:id/update-task-priority').put(protect, updateTaskPriority)
router.route('/:id/update-task-status').put(protect, updateTaskStatus)
router.route('/:id/update-task-type').put(protect, updateTaskType)
router.route('/:id/update-task-deadline').put(protect, updateTaskDeadline)
router.route('/:id/get-urgent-tasks').put(protect, getUrgentTasks)
router.route('/:id/get-completed-tasks').put(protect, getCompletedTasks)

module.exports = router