import { Box, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import ProjectUpdateForm from '../../components/ProjectUpdateForm'
import SideDrawer from '../../components/SideDrawer'
import { getProject, reset, updateProject } from '../../features/projects/projectSlice'

function EditProject( {match} ) {
  
    const { projectId } = useParams()
    // console.log("projectId from useParams: " + projectId)

    const { projects, isLoading, isError, message } = useSelector((state) => state.projects) 
    const { user } = useSelector((state) => state.auth)
    // console.log(projects[0])

    let title, description
    if(projects[0]) {
        ({ title, description } = projects[0])
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        if(isError) {
            console.log(message)
        }
      
        if(!user) {
            navigate('/')
          }

        dispatch(getProject(projectId))


        return () => {
            dispatch(reset())
          }
    }, [])

    if(isLoading) {
        return <CircularProgress />
      }


    if(!projects) {
        return (
            <Grid>
                <h2>Project not found!</h2>
            </Grid>
        )
    }

  
    return (
    <>
        <LoggedInNavbar />
        <Box container bgcolor={"#fafafa"} height={"100vh"} >
            <SideDrawer />
            <ProjectUpdateForm projectId={projectId} title={title} description={description} />
        </Box>
        
    </>
)
}

export default EditProject