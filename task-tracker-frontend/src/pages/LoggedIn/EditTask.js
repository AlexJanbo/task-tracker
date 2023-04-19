import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, CircularProgress, Grid } from '@mui/material'
import { reset, getTasks, getIndividualTask } from '../../features/tasks/taskSlice'
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
            <Box bgcolor={"#fafafa"} height={"100vh"}>
                <SideDrawer />    
                <Grid container>
                    <Grid item style={{ marginLeft: "15%", marginTop: "4%"}}>
                        {tasks.task && <TaskUpdateBreadcrumbs id={tasks.task._id} />}
                        {tasks.task && <TaskUpdateForm taskId={tasks.task._id} title={tasks.task.title} description={tasks.task.description} priority={tasks.task.priority} status={tasks.task.status} deadline={tasks.task.deadline} />}
                    </Grid>
                </Grid>
            </Box>
        </>
  )
}

export default EditTask