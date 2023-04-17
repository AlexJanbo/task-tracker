import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, CircularProgress, Grid } from '@mui/material'
import { reset, getTasks } from '../../features/tasks/taskSlice'
import TaskUpdateForm from '../../components/TaskUpdateForm'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'
import TaskUpdateBreadcrumbs from '../../components/TaskUpdateBreadcrumbs'


function EditTask( {match} ) {

    const { taskId } = useParams()
    const { tasks, isLoading, isError, message } = useSelector((state) => state.tasks) 
    const { user } = useSelector((state) => state.auth)
    
    // console.log(tasks)

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

    let Task;
    tasks?.map(task => {
        if(task._id === taskId) {
            Task = task
        }   
        return Task
    })
    console.log(Task)


    if(!Task) {
        return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
    }

    if(isLoading) {
        return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
      }

    return (
        <>  
            <LoggedInNavbar />
            <Box bgcolor={"#fafafa"} height={"100vh"}>
                <SideDrawer />    
                <Grid container>
                    <Grid item style={{ marginLeft: "15%", marginTop: "4%"}}>
                        <TaskUpdateBreadcrumbs id={Task._id} />
                        <TaskUpdateForm taskId={Task._id} title={Task.title} description={Task.description} priority={Task.priority} status={Task.status} deadline={Task.deadline} />
                    </Grid>
                </Grid>
            </Box>
        </>
  )
}

export default EditTask