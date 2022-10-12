import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { reset, updateTask } from '../features/tasks/taskSlice'
import { useNavigate } from 'react-router-dom'


function TaskUpdateForm({ taskId, titleProp, descriptionProp, priorityProp, statusProp }) {

    const { user } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ title, setTitle ] = useState(titleProp)
    const [ description, setDescription ] = useState(descriptionProp)
    const [ priority, setPriority ] = useState(priorityProp)
    const [ status, setStatus ] = useState(statusProp)



    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(updateTask({taskId, title, description, priority, status}))
        dispatch(reset())
        navigate('/tasks/')
    }

    return (
        <Grid container spacing={3} sx={{ display: 'flex', flexDirection: 'column', width:"400px", justifyContent: 'center'}}>
            <Grid item style={{ width: "350px", zIndex: "1", backgroundColor: "orange", border: "2px solid black", borderRadius: "1rem"}}>
                <Typography variant="h4" style={{ textAlign: "center", marginBottom: "4%"}}>Update Task!</Typography>
            </Grid>
            <Grid container spacing={3} sx={{ zIndex: "0", display: 'flex', flexDirection: 'column', paddingTop: "1rem", width:"400px", alignItems: 'center', border: "1px solid black"}}>
                <Grid item>
                    <TextField
                        id="title"
                        name="title"
                        label="Title"
                        type="text"
                        multiline={true}
                        rows={2}
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
                        multiline={true}
                        maxRows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <FormControl>
                    <FormLabel style={{textAlign:"center"}}>Priority</FormLabel>
                    <RadioGroup
                    row
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    >
                        <FormControlLabel value="Low" control={<Radio />} label="Low" />
                        <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                        <FormControlLabel value="High" control={<Radio />} label="High" />
                    </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                    <FormLabel style={{textAlign:"center"}}>Status</FormLabel>
                    <RadioGroup
                    row
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    >
                        <FormControlLabel value="Created" control={<Radio />} label="Created" />
                        <FormControlLabel value="In Progress" control={<Radio />} label="In Progress" />
                        <FormControlLabel value="Completed" control={<Radio />} label="Completed" />
                    </RadioGroup>
                    </FormControl>
                </Grid>

                <Button type='submit' onClick={handleSubmit}>
                    Create Task
                </Button>
            </Grid>
        </Grid>
  )
}

export default TaskUpdateForm