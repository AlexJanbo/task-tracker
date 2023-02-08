import { Box, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import ProjectUpdateForm from '../../components/ProjectUpdateForm'
import SideDrawer from '../../components/SideDrawer'
import { reset, updateProject } from '../../features/projects/projectSlice'

function EditProject( {match} ) {
  
    const { projectId } = useParams()

    const { projects, isLoading, isError, message } = useSelector((state) => state.projects) 
    const { user } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")

    useEffect(() => {
        if(isError) {
            console.log(message)
        }
      
        if(!user) {
            navigate('/')
          }

        
        let Project;
        projects?.map(project => {
            if(project._id === projectId) {
                Project = project
            }
            return Project
        })
        console.log(Project)
    
        setTitle(Project.title)
        setDescription(Project.description)


        // return () => {
        //     dispatch(reset())
        //   }
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

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(updateProject({projectId, title, description}))
        dispatch(reset())
        navigate('/projects')
        

    }
  
    return (
    <>
        <LoggedInNavbar />
        <Box container bgcolor={"#fafafa"} height={"100vh"} >
            <SideDrawer />
            <ProjectUpdateForm projectId={projectId} />
        </Box>
        
    </>
)
}

export default EditProject