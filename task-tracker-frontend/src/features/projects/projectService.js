import axios from 'axios'


// const hostedServer = 'https://task-tracker-api-rehs.onrender.com/api/projects/'
const API_URL = "/api/projects/"


// const API_URL = 'https://task-tracker-api-rehs.onrender.com/api/users/'
// For Deployment


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

    const response = await axios.put(API_URL + projectData.projectId, projectData , config)
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

// Add member to project
const addProjectMember = async (projectData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    console.log(projectData)
    const response = await axios.post(API_URL + projectData.projectId + "/members/", projectData , config)
    console.log(response)

    return response.data
}

const projectService = {
    createProject,
    getProjects,
    updateProject,
    deleteProject,
    addProjectMember
}

export default projectService