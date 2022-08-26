import axios from 'axios'

const API_URL = '/api/projects/'

// Create a new project
const createProject = async (projectData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.post(API_URL, projectData , config)
    console.log(response)

    return response.data
}

// Get User Projects
const getProjects = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Update a project
const updateProject = async (projectData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.put(API_URL + projectData.taskId, projectData , config)
    console.log(response)

    return response.data
}

// Delete a project
const deleteProject = async (projectId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + projectId, config)

    return response.data
}

const projectService = {
    createProject,
    getProjects,
    updateProject,
    deleteProject,
}

export default projectService