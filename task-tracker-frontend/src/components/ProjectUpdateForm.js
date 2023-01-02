import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset, updateProject } from '../features/projects/projectSlice'

function ProjectUpdateForm( projectId ) {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(updateProject({projectId, title, description}))
        dispatch(reset())
        navigate('/projects')
        

    }

  return (
    <>
         <Grid container sx={{ display: 'flex', flexDirection: 'column', width: '35%', height: "60%", marginLeft: '25%', marginTop: '10%', border: '.2rem solid black', borderRadius: '.5rem'}}>
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

export default ProjectUpdateForm