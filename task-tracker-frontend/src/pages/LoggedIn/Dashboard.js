import React, { useEffect } from 'react'
import { Box, Button, CircularProgress, Divider, Grid, Typography} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getUrgentTasks, reset } from '../../features/tasks/taskSlice'
import SideDrawer from '../../components/SideDrawer'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import DashboardPanel from '../../components/DashboardPanel'


function Dashboard() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    const { tasks, isLoading, isError, message } = useSelector((state) => state.tasks) 


    useEffect(() => {
        if(isError) {
        console.log(message)
        }

        if(!user) {
        Navigate('/')
        }

        // dispatch(getUrgentTasks())


        return () => {
        dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    if(isLoading) {
      return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
    }
    
    // const highTask = tasks.filter((task) => {
    //     return task.priority === "High"
    // })
    // console.log(highTask)

  return(
    <>
        <LoggedInNavbar />
        <Box container bgcolor={"#fafafa"} height={"100%"} >
            <SideDrawer />
            {/* <DashboardPanel urgentTasks={tasks}/> */}
        </Box>
  </>
  )
}

export default Dashboard