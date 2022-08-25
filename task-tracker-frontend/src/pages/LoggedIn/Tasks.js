import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Box, CircularProgress, Container} from '@mui/material'
import TaskForm from '../../components/TaskForm'
import { getTasks, reset } from '../../features/tasks/taskSlice'
import TaskTable from '../../components/TaskTable'
import ClippedDrawer from '../../components/ClippedDrawer'

const capitalizeName = (string) => {
  const nameArray = string.split(" ")

  nameArray[0] = nameArray[0][0].toUpperCase() + nameArray[0].substr(1)
  nameArray[1] = nameArray[1][0].toUpperCase() + nameArray[1].substr(1)
  
  return nameArray[0] + ' ' + nameArray[1]

}

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
    return <CircularProgress />
  }

  return (
    <>
        <Box container sx={{ display: 'flex', flexDirection:'row', justifyContent:"flex-start"}} >
        <ClippedDrawer />
        <Box item sx={{ display: 'flex', flexDirection: 'column'}} justifyContent="center" marginTop="4rem">
          <Container style={{ height: '25rem', width: '100%', marginTop: '0' }}>
            <section style={{ marginTop: '1rem', marginBottom:'4rem'}}>
              <TaskTable style={{ justifyContent: 'center' }} />
            </section>
            <section>

              <TaskForm/>
            </section>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Tasks