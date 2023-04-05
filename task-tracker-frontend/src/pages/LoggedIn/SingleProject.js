import { Box, CircularProgress, Grid, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import ProjectMembersForm from '../../components/ProjectMembersForm'
import ProjectMembersTable from '../../components/ProjectMembersTable'
import ProjectTasks from '../../components/ProjectTasks'
import SideDrawer from '../../components/SideDrawer'
import SingleProjectCard from '../../components/SingleProjectCard'
import { getUserInformation } from '../../features/auth/authSlice'
import { getProject, getProjects, reset } from '../../features/projects/projectSlice'
import ProjectBreadcrumbs from '../../components/ProjectBreadcrumbs'

function SingleProject({ match }) {

    const { projectId } = useParams()
    // const { projects, isLoading, isError, message } = useSelector((state) => state.projects)
    const { projects, isLoading } = useSelector((state) => state.projects) 
    // console.log(projects)
    
    let projectInformation
    if(projects[0]) {
      projectInformation = projects[0]
    }
    // console.log(projectInformation)

    let projectMembers
    if(projects[1]) {
      projectMembers = projects[1]
    }



    const dispatch = useDispatch()

    useEffect(() => {
        // if(isError) {
        //   console.log(message)
        // }
    
        // if(!user) {
        //   navigate('/')
        // }
    
        dispatch(getProject(projectId))
    
    
        return () => {
          dispatch(reset())
        }
      }, [dispatch])

    if(isLoading) {
      return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
    }

    if(!projectInformation || !projectMembers) {
      return (
          <Grid>
              <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
          </Grid>
      )
  }

    return (
        <>
          <LoggedInNavbar />
          <Box container bgcolor={"#fafafa"} height={"100%"} >
            <Stack direction="row" spacing={1} justifyContent="space-between" >
              <SideDrawer />
              <Stack flex={3} direction="column" spacing={4} justifyContent="start" >
                <ProjectBreadcrumbs title={projectInformation.title}/>
                <SingleProjectCard projectId={projectId} projectCreator={projectInformation.projectCreator} title={projectInformation.title} description={projectInformation.description}/>
              </Stack>
              <Stack flex={3} direction="column" spacing={4} justifyContent="space-between" >
                <ProjectMembersForm id={projectId} />
                <ProjectMembersTable members={projectMembers} />
              </Stack>
            </Stack>
          </Box>
        </>
    )
}

export default SingleProject