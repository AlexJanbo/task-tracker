import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Box, CircularProgress, Container, Grid, Stack, useTheme} from '@mui/material'
import TaskForm from '../../components/TaskForm'
import { getTasks, reset } from '../../features/tasks/taskSlice'
import TaskTable from '../../components/TaskTable'
import TaskHeader from '../../components/TaskHeader'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'
import TaskFormModal from '../../components/TaskFormModal'


function Tasks() {

  const theme = useTheme()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, message } = useSelector((state) => state.tasks) 

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
    return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
  }

  return (
    <>
      <LoggedInNavbar />
      <Box container bgcolor={theme.palette.background.default} sx={{ flex: 1}}>
        <Stack direction="row" spacing={4} justifyContent="space-between" >
          <SideDrawer />
          <TaskFormModal />
          <TaskTable />
          <TaskForm />
        </Stack>
      </Box>
    </>
  )
}

export default Tasks