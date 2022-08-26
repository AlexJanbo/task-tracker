import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import groupProjectService from './groupProjectService'

const initialState = {
    groupProjects: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

// Create new group project
export const createGroupProject = createAsyncThunk('groupProjects/create', async (groupProjectData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await groupProjectService.createGroupProject(groupProjectData, token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get User Group Projects
export const getGroupProjects = createAsyncThunk('groupProjects/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await groupProjectService.getGroupProjects(token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Update User Group Projects
export const updateGroupProject = createAsyncThunk('groupProjects/update', async (groupProjectData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await groupProjectService.updateGroupProject(groupProjectData, token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Delete a Project
export const deleteGroupProject = createAsyncThunk('groupProjects/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await groupProjectService.deleteGroupProject(id, token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
 
export const groupProjectSlice = createSlice({
    name: 'groupProject',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createGroupProject.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createGroupProject.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.groupProjects.push(action.payload)
            })
            .addCase(createGroupProject.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getGroupProjects.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getGroupProjects.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.groupProjects = action.payload
            })
            .addCase(getGroupProjects.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateGroupProject.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateGroupProject.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.groupProjects = action.payload
            })
            .addCase(updateGroupProject.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteGroupProject.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteGroupProject.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.groupProjects = state.groupProjects.filter((project) => project._id !== action.payload.id)
            })
            .addCase(deleteGroupProject.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }

})

export const { reset } = groupProjectSlice.actions
export default groupProjectSlice.reducer