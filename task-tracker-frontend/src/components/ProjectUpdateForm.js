import { Button, Grid, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset, updateProject } from '../features/projects/projectSlice'

function ProjectUpdateForm( props ) {

    const theme = useTheme()
    const projectId = props.projectId


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ title, setTitle ] = useState(props.title)
    const [ description, setDescription ] = useState(props.description)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProject({projectId, title, description}))
        dispatch(reset())
        navigate('/projects')
    }

  return (
    <>
         <Grid container spacing={3} sx={{ display: 'flex', flexDirection: 'column', width:"400px", justifyContent: 'center', marginLeft: "5%", marginTop: "5%"}}>
            <Grid item style={{ width: "350px", zIndex: "1", backgroundColor: theme.palette.primary.main, border: "1px solid black", borderRadius: "1rem"}}>
                <Typography variant="h5" style={{ color: theme.palette.text.primary, textAlign: "center", marginBottom: "4%"}}>Update Task!</Typography>
            </Grid>
            <Grid container spacing={3} sx={{ backgroundColor: "white", zIndex: "0", display: 'flex', flexDirection: 'column', paddingTop: "1rem", width:"400px", alignItems: 'center', border: "1px solid black"}}>
                <Grid item >
                    <TextField
                        style={{backgroundColor: theme.palette.background.default}}
                        id="title"
                        name="title"
                        label="Title"
                        type="text"
                        multiline={true}
                        rows={1}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        style={{backgroundColor: theme.palette.background.default}}
                        id="description"
                        name="description"
                        label="Description"
                        type="text"
                        multiline={true}
                        rows={2}
                        maxRows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Grid>
                <Button type='submit' onClick={handleSubmit}>
                        Update Project
                </Button>
              </Grid>
            </Grid>
    </>
  )
}

export default ProjectUpdateForm