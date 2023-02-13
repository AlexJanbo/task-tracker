import React, { useEffect } from 'react'
import { Box, Button, Divider, Grid, Typography} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getTasks, reset } from '../../features/tasks/taskSlice'
import SideDrawer from '../../components/SideDrawer'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import DashboardPanel from '../../components/DashboardPanel'


function Dashboard() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    const { tasks } = useSelector((state) => state.tasks)

    const { isLoading, isError, message } = useSelector((state) => state.tasks) 

    useEffect(() => {
        if(isError) {
        console.log(message)
        }

        if(!user) {
        Navigate('/')
        }

        dispatch(getTasks())


        return () => {
        dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])
    
    // const highTask = tasks.filter((task) => {
    //     return task.priority === "High"
    // })
    // console.log(highTask)

  return(
    <>
        <LoggedInNavbar />
        <Box container bgcolor={"#fafafa"} height={"100%"} >
            <SideDrawer />
            <DashboardPanel />
        </Box>
  </>
  )
}

export default Dashboard