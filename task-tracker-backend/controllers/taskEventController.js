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

    const events = await TaskEvent.find({ taskId }).sort({ timestamp: 1 }).exec();
  
    const initialState = {
        title: null,
        description: null,
        priority: null,
        status: null,
        deadline: null,
    };
  
    return events.reduce((state, event) => {
      switch (event.eventType) {
        case TaskEventTypes.Task_Created:
          return {
            ...state,
            ...event.data,
          };
        case TaskEventTypes.Task_Title_Updated:
          return {
            ...state,
            title: event.data.title,
          };
        case TaskEventTypes.Task_Description_Updated:
          return {
            ...state,
            description: event.data.description,
          };
        case TaskEventTypes.Task_Priority_Updated:
          return {
            ...state,
            priority: event.data.priority,
          };
        case TaskEventTypes.Task_Status_Updated:
            return {
                ...state,
                status: event.data.status,
        };
        case TaskEventTypes.Task_Deadline_Updated:
            return {
                ...state,
                deadline: event.data.deadline,
        };
        default:
          return state;
      }
    }, initialState);
  });

  module.exports = {
    createTaskEvent,
    getTaskHistoryById,
  }