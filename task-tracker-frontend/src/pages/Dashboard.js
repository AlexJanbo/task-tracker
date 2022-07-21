import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { CircularProgress, Container, Grid } from '@mui/material'
import TaskForm from '../components/TaskForm'
import { getTasks, reset } from '../features/tasks/taskSlice'
import TaskItem from '../components/TaskItem'
import TaskTable from '../components/TaskTable'
import Sidebar from '../components/Sidebar'


function Dashboard() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { tasks, isLoading, isError, message } = useSelector((state) => state.tasks) 

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

  return (
    <>
      <Grid container direction='row' justifyContent="flex-start" >
        <Grid item>
          <Container>
            <Sidebar />
          </Container>
        </Grid>
        <Grid item justifyContent="center" marginTop="4rem">
          <Container style={{ height: '25rem', width: '90%', marginTop: '2rem'}}>
            {/* <section>
              <h1>Welcome { user && user.name }</h1>
              <p>Task Dashboard</p>
            </section> */}
            <div style={{ height: '25rem', width: '75%', marginTop: '2rem'}}>
            <TaskTable style={{ justifyContent: 'center' }} />

            </div>
            <section>
              {tasks.length > 0 ?
              (<div>
                {tasks.map((task) => (
                  <TaskItem key={task._id} task={task} />
                  ))}
              </div>) : 
              (<h3>You have no Tasks.</h3>)}
            </section>
              <TaskForm />
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard