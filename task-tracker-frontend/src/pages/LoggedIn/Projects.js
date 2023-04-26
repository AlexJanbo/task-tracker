import { Box, CircularProgress, Grid, Stack, useTheme } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import ProjectCard from '../../components/ProjectCard'
import ProjectForm from '../../components/ProjectForm'
import ProjectFormModal from '../../components/ProjectFormModal'
import ProjectTable from '../../components/ProjectTable'
import SideDrawer from '../../components/SideDrawer'
import { getProjects, reset } from '../../features/projects/projectSlice'

function Projects() {

  const theme = useTheme()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { projects } = useSelector((state) => state.projects) 
  // console.log(projects)

  const projectArray = Array.from(projects)
  // console.log(projectArray)


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
      <LoggedInNavbar />
      <Box container bgcolor={theme.palette.background.default} height={"100vh"}>
        <Stack direction="row" spacing={4} justifyContent="space-between" >
          <SideDrawer /> 
          <ProjectFormModal />
          <ProjectTable />
          <ProjectForm />
        </Stack>
      </Box>
    </>
  )
}

export default Projects