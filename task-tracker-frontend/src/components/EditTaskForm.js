import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useNavigate, useParams } from 'react-router-dom'
import { Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'

import { getTasks, updateTask, reset } from '../features/tasks/taskSlice'


function EditTaskForm({ match }) {

    const { taskId } = useParams()
    const { tasks, isLoading, isError, message } = useSelector((state) => state.tasks) 
    const { user } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ priority, setPriority ] = useState("")
    const [ status, setStatus ] = useState("")

    useEffect(() => {
        if(isError) {
            console.log(message)
        }
      
        if(!user) {
            navigate('/')
          }
        dispatch(getTasks())

        let Task;
        tasks.map(task => {
            if(task._id === taskId) {
                Task = task
            }
            return Task
        })

        setTitle(Task.title)
        setDescription(Task.description)
        setPriority(Task.priority)
        setStatus(Task.status)

        return () => {
            dispatch(reset())
          }
    }, [])


    if(isLoading) {
        return <CircularProgress />
      }


    if(!tasks) {
        return (
            <Grid>
                <h2>Task not found!</h2>
            </Grid>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(updateTask({title, description, priority, status}))
 
    }


    return (
        <Grid sx={{ display: 'flex', flexDirection: 'column', width: '35%', height: "60%", marginLeft: '15%', marginTop: '10%', border: '.2rem solid black', borderRadius: '.5rem'}}>
            <Typography>Edit Task!</Typography>
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
            <FormLabel>Priority</FormLabel>
            <RadioGroup
            row
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            >
                <FormControlLabel value="Low" control={<Radio />} label="Low" />
                <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                <FormControlLabel value="High" control={<Radio />} label="High" />
            </RadioGroup>
            </FormControl>

            <FormControl>
            <FormLabel>Status</FormLabel>
            <RadioGroup
            row
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            >
                <FormControlLabel value="Created" control={<Radio />} label="Created" />
                <FormControlLabel value="In Progress" control={<Radio />} label="In Progress" />
                <FormControlLabel value="Completed" control={<Radio />} label="Completed" />
            </RadioGroup>
            </FormControl>

            <Button  type='submit' onClick={handleSubmit}>
                Update Task
            </Button>
        </Grid>
  )
}

export default EditTaskForm