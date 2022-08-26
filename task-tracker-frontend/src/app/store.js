import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import taskReducer from '../features/tasks/taskSlice'
import projectReducer from '../features/projects/projectSlice'
import groupProjectReducer from '../features/group-projects/groupProjectSlice'



export const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: taskReducer,
        projects: projectReducer,
        groupProjects: groupProjectReducer,
    }
    
})