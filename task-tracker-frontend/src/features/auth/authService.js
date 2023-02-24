import axios from 'axios'

// const hostedServer = 'https://task-tracker-api-rehs.onrender.com/api/users/'
const API_URL = "/api/users/"

// const API_URL = 'https://task-tracker-api-rehs.onrender.com/api/users/'
// For Deployment

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login User
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Update user information
const updateUser = async (userData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.put(API_URL + "update", userData , config)
    // console.log(response)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Change user password
const changePassword = async (userData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.put(API_URL + "change-password", userData , config)
    // console.log(response)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Change user profile picture
const changeProfilePicture = async (userData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.put(API_URL + "change-profile-picture", userData , config)
    // console.log(response)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const getAllUsers = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.get(API_URL + "get-all-users", config)

    // console.log(response.data)
    return response.data
}

// Change user role
const changeRole = async (userData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.put(API_URL + "change-role", userData ,config)
    // console.log(response)

    return response.data
}

// Get user information

const getUserInformation = async (userData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.post(API_URL + "get-user-information", userData ,config)
    // console.log(response)

    return response.data
}

const authService = {
    register,
    logout,
    login,
    updateUser,
    changePassword,
    changeProfilePicture,
    getAllUsers,
    changeRole,
    getUserInformation,
}

export default authService