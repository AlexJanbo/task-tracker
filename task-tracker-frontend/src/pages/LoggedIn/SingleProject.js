import { Box, CircularProgress, Grid } from '@mui/material'
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

function SingleProject({ match }) {

    const { projectId } = useParams()
    // const { projects, isLoading, isError, message } = useSelector((state) => state.projects)
    // const { user } = useSelector((state) => state.auth)


    const dispatch = useDispatch()
    const navigate = useNavigate()

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
      }, [])

    // if(isLoading) {
    //   return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
    // }

    // let Project;
    // projects?.map(project => {
    // if(project._id === projectId) {
    //     Project = project
    // }
    // return Project
    // })
    // console.log(Project)


    // if(!Project) {
    //     return (
    //         <Grid>
    //             <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
    //         </Grid>
    //     )
    // }

    return (
        <>
          <LoggedInNavbar />
          <Box container bgcolor={"#fafafa"} height={"100vh"} >
            <SideDrawer />
            {/* <SingleProjectCard id={Project._id} title={Project.title} description={Project.description}/>
            <ProjectMembers id={projectId} /> */}
            {/* <ProjectMembersTable members={Project.members} membersArray={members} /> */}
          </Box>
        </>
    )
}

export default SingleProject