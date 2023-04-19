import { Box, CircularProgress, Grid, Stack } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SingleTaskCard from '../../components/SingleTaskCard'
import TaskHistoryTable from '../../components/TaskHistoryTable'
import TaskAttachments from '../../components/TaskAttachments'
import CommentForm from '../../components/CommentForm'
import CommentTable from '../../components/CommentTable'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'
import { getComments } from '../../features/comments/commentSlice'
import { getIndividualTask, getTasks, reset} from '../../features/tasks/taskSlice'
import TaskBreadcrumbs from '../../components/TaskBreadcrumbs'

export const SingleTask = ({ match }) => {

    const { taskId } = useParams()
    const { user } = useSelector((state) => state.auth)
    const { tasks, isLoading, isError, message } = useSelector((state) => state.tasks) 

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(isError) {
            console.log(message)
        }
      
        if(!user) {
            navigate('/')
          }

        dispatch(getComments())
        dispatch(getIndividualTask(taskId))



        return () => {
            dispatch(reset())
          }
    }, [])

    if(isLoading) {
        return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
    }


    return (
        <>  
            <LoggedInNavbar />
            <Box container bgcolor={"#fafafa"} height={"100%"} >
                <Stack direction="row" spacing={1} justifyContent="space-between" >
                    <SideDrawer />
                    <Stack flex={3} direction="column" spacing={4} justifyContent="start" >
                        {tasks.task && <TaskBreadcrumbs id={tasks.task._id} />}
                        {tasks.task && <SingleTaskCard id={tasks.task._id} title={tasks.task.title} description={tasks.task.description} priority={tasks.task.priority} status={tasks.task.status} deadline={tasks.task.deadline} created={tasks.task.createdAt}/>}
                        {tasks.task && <CommentForm id={tasks.task._id} /> }
                        {tasks.task && <CommentTable id={tasks.task._id}/>}
                        {tasks.event && <TaskHistoryTable events={tasks.event} />}
                    </Stack>
                </Stack>
            </Box> 
        </>
    )
}