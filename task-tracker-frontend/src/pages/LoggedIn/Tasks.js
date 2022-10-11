import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { CircularProgress, Container, Grid} from '@mui/material'
import TaskForm from '../../components/TaskForm'
import { getTasks, reset } from '../../features/tasks/taskSlice'
import TaskTable from '../../components/TaskTable'
import ClippedDrawer from '../../components/ClippedDrawer'
import TaskHeader from '../../components/TaskHeader'


function Tasks() {

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
      <Grid container spacing={1} display="flex" direction="row" style={{backgroundColor: "#f9f9f9"}}>
        <Grid item xs={1}>
          <ClippedDrawer />
        </Grid>
        <Grid item marginTop="4rem" height="52.5rem" xs={8}>
          <Container style={{ height: '52.5rem', width: '100%', marginTop: '0' }}>
            <TaskHeader />
            <section style={{ marginBottom:'4rem'}}>
              <TaskTable style={{ justifyContent: 'center' }} />
            </section>
          </Container>
        </Grid>
        <Grid item xs={3} style={{ marginTop: "15%"}}>
          <TaskForm/>
        </Grid>
      </ Grid>
    </>
  )
}

export default Tasks