import axios from 'axios'


// const hostedServer = 'https://task-tracker-api-rehs.onrender.com/api/projects/'
const API_URL = "/api/comments/"


// const API_URL = 'https://task-tracker-api-rehs.onrender.com/api/users/'
// For Deployment


// Create a new comment
const createComment = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.post(API_URL, config)
    console.log(response)

    return response.data
}

// Get task comments
const getComments = async (commentData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.get(API_URL, commentData, config)

    return response.data
}

// Update a comment
const updateComment = async (commentData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.put(API_URL + commentData.commentId, commentData , config)
    console.log(response)

    return response.data
}

// Delete a comment
const deleteComment = async (commentId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + commentId, config)

    return response.data
}

const commentService = {
    createComment,
    getComments,
    updateComment,
    deleteComment,
}

export default commentService