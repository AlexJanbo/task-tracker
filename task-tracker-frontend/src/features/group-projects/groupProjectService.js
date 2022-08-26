import axios from 'axios'

const API_URL = '/api/group-projects/'

// Create a new group project
const createGroupProject = async (groupProjectData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.post(API_URL, groupProjectData , config)
    console.log(response)

    return response.data
}

// Get User group Projects
const getGroupProjects = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Update a group project
const updateGroupProject = async (groupProjectData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.put(API_URL + groupProjectData.groupProjectId, groupProjectData , config)
    console.log(response)

    return response.data
}

// Delete a group project
const deleteGroupProject = async (groupProjectId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + groupProjectId, config)

    return response.data
}

const groupProjectService = {
    createGroupProject,
    getGroupProjects,
    updateGroupProject,
    deleteGroupProject,
}

export default groupProjectService