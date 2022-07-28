import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Grid, TextField } from '@mui/material'
import { createTask } from '../features/tasks/taskSlice'


function TaskForm() {

    const [ text, setText ] = useState('')

    // const [ formData, setFormData ] = useState({ text: '', description: ''})

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData((prevState) => {
    //         return {
    //         ...prevState,
    //         [name]: value,
    //     }})
    // }

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createTask(text))
        setText('')
    }


    return (
    <Grid>
        <Grid item>
            <TextField
              id="text"
              name="text"
              label="Text"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
        </Grid>
        {/* <Grid item>
            <TextField
              id="description"
              name="description"
              label="Description"
              type="text"
              value={formData.description}
              onChange={handleChange}
            />
        </Grid> */}
        
        <Button  type='submit' onClick={handleSubmit}>
            Create Task
        </Button>
    </Grid>
  )
}

export default TaskForm