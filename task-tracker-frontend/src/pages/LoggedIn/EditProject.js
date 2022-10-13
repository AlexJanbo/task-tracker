import { Button, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ClippedDrawer from '../../components/ClippedDrawer'
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
        <Grid container sx={{ display: 'flex', flexDirection: 'column', width: '35%', height: "60%", marginLeft: '25%', marginTop: '10%', border: '.2rem solid black', borderRadius: '.5rem'}}>
            <ClippedDrawer />
            <Typography>Edit Project!</Typography>
            <Grid item>
                <TextField
                id="title"
                name="title"
                label="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </Grid>
            <Grid item>
                <TextField
                id="description"
                name="description"
                label="Description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </Grid>
            <Button type='submit' onClick={handleSubmit}>
                    Update Project
            </Button>

        </Grid>
        
    </>
)
}

export default EditProject