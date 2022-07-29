import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { createTask } from '../features/tasks/taskSlice'


function TaskForm() {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ priority, setPriority ] = useState('Low')
    const status = "Created"


    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createTask({title, description, priority, status}))
        setTitle('')
        setDescription('')
        setPriority('Low')
    }


    return (
    <Grid>
        <Typography>Create a New Task!</Typography>
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

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Priority</FormLabel>
          <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          >
            <FormControlLabel value="Low" control={<Radio />} label="Low" />
            <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="High" control={<Radio />} label="High" />
          </RadioGroup>
        </FormControl>

        <Button  type='submit' onClick={handleSubmit}>
            Create Task
        </Button>
    </Grid>
  )
}

export default TaskForm