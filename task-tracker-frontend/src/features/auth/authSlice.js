import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Login User
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Update user information
export const updateUser = createAsyncThunk('auth/update', async (userData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await authService.updateUser(userData, token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Update user password
export const changePassword = createAsyncThunk('auth/changePassword', async (userData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await authService.changePassword(userData, token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Update user profile picture
export const changeProfilePicture = createAsyncThunk('auth/changeProfilePicture', async (userData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await authService.changeProfilePicture(userData, token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('auth/logout', 
async () => {
    await authService.logout()
})

// Get Users
export const getAllUsers = createAsyncThunk('auth/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await authService.getAllUsers(token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Update user role
export const changeRole = createAsyncThunk('auth/changeRole', async (userData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await authService.changeRole(userData, token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get User Information
export const getUserInformation = createAsyncThunk('auth/getUserInformation', async (userData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await authService.getUserInformation(userData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        members: []
    },
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
            state.members = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(changePassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(changeProfilePicture.pending, (state) => {
                state.isLoading = true
            })
            .addCase(changeProfilePicture.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(changeProfilePicture.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.tasks = action.payload
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(changeRole.pending, (state) => {
                state.isLoading = true
            })
            .addCase(changeRole.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(changeRole.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getUserInformation.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserInformation.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                if(!state.members.includes(action.payload)) {
                    state.members.push(action.payload)
                }
            })
            .addCase(getUserInformation.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer