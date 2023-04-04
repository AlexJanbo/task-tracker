import { Box, CircularProgress, Grid, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import ProjectMembers from '../../components/ProjectMembers'
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


    return (
        <>
          <LoggedInNavbar />
          <Box container bgcolor={"#fafafa"} >
              <SideDrawer />
              <ProjectBreadcrumbs title={projectInformation.title}/>
              <SingleProjectCard projectId={projectId} projectCreator={projectInformation.projectCreator} title={projectInformation.title} description={projectInformation.description}/>
              <ProjectMembers id={projectId} />
              {projectMembers.length > 0 && <ProjectMembersTable members={projectMembers} />}
          </Box>
        </>
    )
}

export default SingleProject