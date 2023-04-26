import { Box, Button, CircularProgress, Grid, TextField, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import ProjectUpdateForm from '../../components/ProjectUpdateForm'
import SideDrawer from '../../components/SideDrawer'
import { getProject, reset, updateProject } from '../../features/projects/projectSlice'
import EditProjectBreadcrumbs from '../../components/EditProjectBreadcrumbs'

function EditProject( {match} ) {
    
    const theme = useTheme()
  
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
        <Box container bgcolor={theme.palette.background.default} height={"100vh"}> 
            <SideDrawer />
            <Grid container>
                <Grid item style={{ marginLeft: "15%", marginTop: "4%"}}>
                    <EditProjectBreadcrumbs title={title} id={projectId}/>
                    <ProjectUpdateForm projectId={projectId} title={title} description={description} />
                </Grid>
            </Grid>
        </Box>
        
    </>
)
}

export default EditProject