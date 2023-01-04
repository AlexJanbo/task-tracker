import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import commentService from './commentService'

const initialState = {
    comments: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

// Create new comment
export const createComment = createAsyncThunk('comments/create', async (commentData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await commentService.createComment(commentData, token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get task comments
export const getComments = createAsyncThunk('comments/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await commentService.getComments(token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Update comment
export const updateComment = createAsyncThunk('comments/update', async (commentData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await commentService.updateComment(commentData, token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Delete a comment
export const deleteComment = createAsyncThunk('comments/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await commentService.deleteComment(id, token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.reponse.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
 
export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createComment.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.projects.push(action.payload)
            })
            .addCase(createComment.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getComments.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.projects = action.payload
            })
            .addCase(getComments.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateComment.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateComment.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.projects = action.payload
            })
            .addCase(updateComment.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteComment.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.projects = state.projects.filter((project) => project._id !== action.payload.id)
            })
            .addCase(deleteComment.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }

})

export const { reset } = commentSlice.actions
export default commentSlice.reducer