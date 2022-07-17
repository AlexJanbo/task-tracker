import axios from 'axios'

const API_URL = '/api/tasks/'

// Create a new task
const createTask = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, taskData, config)

    return response.data
}

const taskService = {
    createTask,
}

export default taskService