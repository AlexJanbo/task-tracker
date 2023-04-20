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

// Get Individual Task
const getIndividualTask = async (taskId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.get(API_URL + taskId, config)

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

// Update a task title
const updateTaskTitle = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.put(API_URL + taskData.taskId + "/update-task-title", taskData , config)
    console.log(response)

    return response.data
}

// Update a task description
const updateTaskDescription = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.put(API_URL + taskData.taskId + "/update-task-description", taskData , config)
    console.log(response)

    return response.data
}

// Update a task priority
const updateTaskPriority = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.put(API_URL + taskData.taskId + "/update-task-priority", taskData , config)
    console.log(response)

    return response.data
}

// Update a task status
const updateTaskStatus = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.put(API_URL + taskData.taskId + "/update-task-status", taskData , config)
    console.log(response)

    return response.data
}

// Update a task type
const updateTaskType = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.put(API_URL + taskData.taskId + "/update-task-type", taskData , config)
    console.log(response)

    return response.data
}

// Update a task deadline
const updateTaskDeadline = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.put(API_URL + taskData.taskId + "/update-task-deadline", taskData , config)
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

// Get urgent tasks
const getUrgentTasks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.get(API_URL + 'get-urgent-tasks', config)

    return response.data
}


const taskService = {
    createTask,
    getTasks,
    getIndividualTask,
    updateTask,
    updateTaskTitle,
    updateTaskDescription,
    updateTaskPriority,
    updateTaskStatus,
    updateTaskType,
    updateTaskDeadline,
    deleteTask,
    getUrgentTasks,
}

export default taskService