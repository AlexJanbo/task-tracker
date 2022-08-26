import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { createProject } from '../features/projects/projectSlice'


function TaskForm() {

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
    <Grid>
        <Typography>Create a New Project!</Typography>
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
  )
}

export default TaskForm