import { CircularProgress, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ClippedDrawer from '../../components/ClippedDrawer'
import ProjectCard from '../../components/ProjectCard'
import ProjectForm from '../../components/ProjectForm'
import ProjectHeader from '../../components/ProjectHeader'
import ProjectTable from '../../components/ProjectTable'
import { getProjects, reset } from '../../features/projects/projectSlice'

function Projects() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { projects } = useSelector((state) => state.projects) 
  // console.log(projects)

  const projectArray = Array.from(projects)
  console.log(projectArray)


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
      <Grid container spacing={10} display="flex" direction="row">
        <Grid item xs={1}>
          <ClippedDrawer />
        </Grid>
        <Grid item marginTop="4rem" height="52.5rem" xs={8}>
          <Container style={{ height: '52.5rem', width: '100%', marginTop: '0' }}>
            <ProjectHeader />
            <section style={{ marginBottom:'4rem'}}>
              <ProjectTable style={{ justifyContent: 'center' }} />
            </section>
          </Container>
        </Grid>
        <Grid item xs={3} style={{ marginTop: "15%"}}>
            <ProjectForm/>
        </Grid>
      </Grid>
    </>
  )
}

export default Projects