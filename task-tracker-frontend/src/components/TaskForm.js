import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Grid, TextField } from '@mui/material'
import { createTask } from '../features/tasks/taskSlice'

function TaskForm() {
  
    const [ text, setText ] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createTask({ text }))
        setText('')
    }


    return (
    <Grid>
        <Grid item>
            <TextField
              id="task"
              name="task"
              label="task"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
        </Grid>
        <Button  type='submit' onClick={onSubmit}>
            Create Task
        </Button>
    </Grid>
  )
}

export default TaskForm