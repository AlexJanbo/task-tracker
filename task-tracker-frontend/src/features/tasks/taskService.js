import axios from 'axios'

// const hostedServer = 'https://task-tracker-api-rehs.onrender.com/api/tasks/'
const API_URL = "/api/tasks/"


// const API_URL = 'https://task-tracker-api-rehs.onrender.com/api/users/'
// For Deployment

// Create a new task
const createTask = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.post(API_URL, taskData , config)
    // console.log(response)

    return response.data
}

// Get User Tasks
const getTasks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Update a task
const updateTask = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.put(API_URL + taskData.taskId, taskData , config)
    console.log(response)

    return response.data
}

// Delete a task
const deleteTask = async (taskId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + taskId, config)

    return response.data
}


const taskService = {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
}

export default taskService