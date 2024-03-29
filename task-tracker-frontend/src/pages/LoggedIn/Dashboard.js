import React, { useEffect, useState } from 'react'
import { Box, Button, CircularProgress, Divider, Grid, Stack, Typography, useTheme} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getCompletedTasks, getUrgentTasks, reset } from '../../features/tasks/taskSlice'
import SideDrawer from '../../components/SideDrawer'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import DashboardPanel from '../../components/DashboardPanel'
import DoughnutChart from '../../components/DoughnutChart'
import BarChart from '../../components/BarChart'




function Dashboard() {

  const theme = useTheme()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    const { tasks, isLoading, isError, message } = useSelector((state) => state.tasks) 
    const [ userId, setUserId ] = useState(user.id)
    console.log(userId)


    console.log(tasks)


    useEffect(() => {
      if(isError) {
        console.log(message)
        }

        if(!user) {
        Navigate('/')
        }


        // dispatch(getUrgentTasks({userId}))
        dispatch(getCompletedTasks({userId}))


        return () => {
          dispatch(reset())
        }
    }, [])

    // if(isLoading) {
      //   return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
    // }
    
    // const highTask = tasks.filter((task) => {
      //     return task.priority === "High"
    // })
    // console.log(highTask)

  return(
    <>
        <LoggedInNavbar />
        <Box container bgcolor={theme.palette.background.default} height={"100vh"}>
          <Stack direction="row" spacing={4} justifyContent="space-between" >
            <SideDrawer />

              {/* <DoughnutChart /> */}
              <BarChart /> 
            
          </Stack>
            {/* <DashboardPanel urgentTasks={tasks}/> */}
        </Box>
  </>
  )
}

export default Dashboard