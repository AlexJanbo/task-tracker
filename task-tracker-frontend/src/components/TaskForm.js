import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Grid, TextField } from '@mui/material'
import { createTask } from '../features/tasks/taskSlice'

function TaskForm() {
  
    const [ formData, setFormData ] = useState({
        title: "",
        description: "",
        priority: ""
    })

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createTask({ formData }))
        setFormData()
    }


    return (
    <Grid>
        <Grid item>
            <TextField
              id="title"
              name="title"
              label="Title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
        </Grid>
        <Grid item>
            <TextField
              id="description"
              name="description"
              label="Description"
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
        </Grid>
        
        <Button  type='submit' onClick={onSubmit}>
            Create Task
        </Button>
    </Grid>
  )
}

export default TaskForm