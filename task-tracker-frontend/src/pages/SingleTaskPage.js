import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ClippedDrawer from '../components/ClippedDrawer'
import SingleTaskCard from '../components/SingleTaskCard'
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
        return Task
    })
    // console.log(Task)


    if(!tasks) {
        return (
            <Grid>
                <h2>Task not found!</h2>
            </Grid>
        )
    }

    return (
        <>  
            {/* <Box sx={{ 
                border: '.25rem solid #292f4c',
                borderRadius: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                justifyItems: 'center',
                alignItems: 'center',
                alignContent: 'flex-start',
                width: '20%',
                height: '30rem',
                marginTop: '5%',
                marginLeft: '40%'
                }}
            > */}
                <ClippedDrawer />
                <SingleTaskCard id={Task._id} title={Task.title} description={Task.description} priority={Task.priority} status={Task.status} />
                {/* <Grid marginTop="4rem" display="flex" flexDirection="column" alignItems="center">
                    <Typography>Title: {Task.title}</Typography>
                    <Typography>Id: {Task._id}</Typography>
                    <Typography>Description: {Task.description}</Typography>
                    <Typography>Priority: {Task.priority}</Typography>
                    <Typography>Status: {Task.status}</Typography>
                    <Typography>Title: {Task.title}</Typography>
                    <Typography>Created At: {new Date(Task.createdAt).toLocaleDateString('en-US')}</Typography>
                </Grid> */}
            {/* </Box> */}
        </>
    )
}