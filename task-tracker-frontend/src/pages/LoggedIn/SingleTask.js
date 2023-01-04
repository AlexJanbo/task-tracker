import { Box, CircularProgress, Grid, Stack } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import SingleTaskCard from '../../components/SingleTaskCard'
import { getTasks, reset } from '../../features/tasks/taskSlice'
import TaskHistory from '../../components/TaskHistory'
import TaskAttachments from '../../components/TaskAttachments'
import CommentForm from '../../components/CommentForm'
import CommentTable from '../../components/CommentTable'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'

export const SingleTask = ({ match }) => {

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
    }, [])

    if(isLoading) {
        return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
      }



    let Task;
    tasks?.map(task => {
        if(task._id === taskId) {
            Task = task
        }   
        return Task
    })
    // console.log(Task)


    if(!Task) {
        return (
            <Grid>
                <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
            </Grid>
        )
    }

    return (
        <>  
            <Box container bgcolor={"#fafafa"} height={"100vh"} >
                <LoggedInNavbar />
                <Stack direction="row" spacing={4} justifyContent="space-between" >
                    <SideDrawer flex={1} />
                    <Stack flex={3} direction="column" spacing={4} justifyContent="start" >
                        <SingleTaskCard id={Task._id} title={Task.title} description={Task.description} priority={Task.priority} status={Task.status} />
                        <TaskHistory />
                    </Stack>
                    <Stack flex={3} direction="column" spacing={4} justifyContent="space-between" >
                        <CommentForm id={Task._id} />
                        <CommentTable task={Task} id={Task._id}/>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}