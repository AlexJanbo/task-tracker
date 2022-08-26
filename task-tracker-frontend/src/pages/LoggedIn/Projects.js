import { Box, CircularProgress, Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ClippedDrawer from '../../components/ClippedDrawer'
import ProjectForm from '../../components/ProjectForm'
import ProjectTable from '../../components/ProjectTable'
import { getProjects, reset } from '../../features/projects/projectSlice'

function Projects() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, message } = useSelector((state) => state.projects) 

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if(!user) {
      navigate('/')
    }

    dispatch(getProjects())


    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
  }

  return (
    <>
      <Box container sx={{ display: 'flex', flexDirection:'row', justifyContent:"flex-start"}} >
      <ClippedDrawer />
        <Box item sx={{ display: 'flex', flexDirection: 'column'}} justifyContent="center" marginTop="4rem">
          <Container style={{ height: '25rem', width: '100%', marginTop: '0' }}>
            <section style={{ marginTop: '1rem', marginBottom:'4rem'}}>
              <ProjectTable style={{ justifyContent: 'center' }} />
            </section>
            <section>
              <ProjectForm />
            </section>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Projects