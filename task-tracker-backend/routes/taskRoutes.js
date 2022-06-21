import express from 'express'
const router = express.Router()
import { readTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js'

router.Route('/').post(createTask).get(readTasks)
router.Route('/:id').put(updateTask).delete(deleteTask)

module.exports = router