import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { getTasks, reset } from '../features/tasks/taskSlice'

export const SingleTaskPage = ({ match }) => {

    const { taskId } = useParams()
    const { tasks, isLoading, isError, message } = useSelector((state) => state.tasks) 
    const { user } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(isError) {
            console.log(message)
        }
      
        if(!user) {
            navigate('/')
          }
        dispatch(getTasks())

        return () => {
            dispatch(reset())
          }
    }, [user, navigate, isError, message, dispatch])

    if(isLoading) {
        return <CircularProgress />
      }



    let Task;
    tasks.map(task => {
        if(task._id === taskId) {
            Task = task
        }
    })
    console.log(Task)


    if(!tasks) {
        return (
            <Grid>
                <h2>Task not found!</h2>
            </Grid>
        )
    }

    return (
        <>  
            <Grid marginTop="4rem" display="flex" flexDirection="column" alignItems="center">
                <Typography>Title: {Task.title}</Typography>
                <Typography>Id: {Task._id}</Typography>
                <Typography>Description: {Task.description}</Typography>
                <Typography>Priority: {Task.priority}</Typography>
                <Typography>Status: {Task.status}</Typography>
                <Typography>Title: {Task.title}</Typography>
                <Typography>Created At: {new Date(Task.createdAt).toLocaleDateString('en-US')}</Typography>
            </Grid>
        </>
    )
}