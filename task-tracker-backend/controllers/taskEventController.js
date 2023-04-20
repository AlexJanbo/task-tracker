const asyncHandler = require('express-async-handler')

const TaskEvent = require('../models/taskEventModel')


const createTaskEvent = async (eventType, taskId, userId, eventData) => {
    try {
      // Validate the input data
      if (!eventType || !taskId || !userId || !eventData) {
        return res.status(400).json({ message: 'Invalid input data' });
      }
      // Create a new TaskEvent document and save it to the database
      const taskEvent = await TaskEvent.create({
        eventType,
        taskId,
        userId,
        data: eventData,
      });

      // Save the task event to the database
      await TaskEvent.save();
      

    } catch (err) {
        res.status(404).json({ message: error.message })
    }
  };



const getTaskHistoryById = asyncHandler(async (taskId) => {

    const events = await TaskEvent.find({ taskId }).sort({ timestamp: -1 }).exec();
  
    return events

  });


const deleteTaskHistoryById = asyncHandler(async (taskId) => {

  try {
     
    // Search the database for the task history
    const taskHistory = await TaskEvent.deleteMany({ taskId: taskId})
    
    
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

  module.exports = {
    createTaskEvent,
    getTaskHistoryById,
    deleteTaskHistoryById,
  }