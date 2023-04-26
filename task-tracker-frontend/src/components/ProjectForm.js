import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button, Grid, TextField, Typography, useTheme } from '@mui/material'
import { createProject } from '../features/projects/projectSlice'


function TaskForm() {

    const theme = useTheme()
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createProject({title, description}))
        setTitle('')
        setDescription('')
    }


    return (

      <Box flex={1} p={2} sx={{ display: { xs: "none", lg: "block" } }}>
        <Grid container spacing={3}  sx={{ marginTop: "50%", display: 'flex', flexDirection: 'column'}}>
          <Grid item style={{ width: "350px", zIndex: "1", backgroundColor: theme.palette.primary.main, border: "2px solid black", borderRadius: "1rem"}}>
            <Typography variant="h5" style={{ textAlign: "center", marginBottom: "4%", color: theme.palette.text.primary}}>Create a Project!</Typography>
          </Grid>
          <Grid container spacing={3} sx={{ bgcolor: theme.palette.background.paper, zIndex: "0", display: 'flex', flexDirection: 'column', paddingTop: "1rem", width:"400px", alignItems: 'center', border: "1px solid black"}}>
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
            <Button  type='submit' onClick={handleSubmit}>
                Create Project
            </Button>
          </Grid>
      </Grid>
    </Box>
  )
}

export default TaskForm