import axios from 'axios'

const API_URL = 'https://task-tracker-api-rehs.onrender.com/api/users/'

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
    console.log(response)

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
    console.log(response)

    return response.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
    updateUser,
    changePassword,
}

export default authService