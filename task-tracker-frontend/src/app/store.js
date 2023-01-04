import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import taskReducer from '../features/tasks/taskSlice'
import projectReducer from '../features/projects/projectSlice'
import commentReducer from '../features/comments/commentSlice'



export const store = configureStore({
    devTools: true,
    reducer: {
        auth: authReducer,
        tasks: taskReducer,
        projects: projectReducer,
        comments: commentReducer,
    }
    
})