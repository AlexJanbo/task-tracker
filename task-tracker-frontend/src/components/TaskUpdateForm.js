import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, FormControl, useTheme, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material'
import { reset, updateTask, updateTaskDeadline, updateTaskDescription, updateTaskPriority, updateTaskStatus, updateTaskTitle, updateTaskType } from '../features/tasks/taskSlice'
import { useNavigate } from 'react-router-dom'



function TaskUpdateForm(props) {

    console.log(props)
    const theme = useTheme()
    const taskId = props.taskId
    const { user } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ title, setTitle ] = useState(props.title)
    const [ description, setDescription ] = useState(props.description)
    const [ priority, setPriority ] = useState(props.priority)
    const [ status, setStatus ] = useState(props.status)
    const [ type, setType ] = useState(props.type)
    const [ deadline, setDeadline ] = useState(props.deadline)


    const handleSubmitTitle = (e) => {
        e.preventDefault()

        if(!title) {
            alert("No title")
            return
        }
        if(title.length > 40) {
            alert("Title is too long")
            return
        }
        if(title.length < 3) {
            alert("Title is too short")
            return
        }

        dispatch(updateTaskTitle({taskId, title}))
        window.location.reload()
    }

    const handleSubmitDescription = (e) => {
        e.preventDefault()

        if(!description) {
            alert("No description")
            return
        }
        if(description.length > 140) {
            alert("Description is too long")
            return
        }
        if(description.length < 3) {
            alert("Description is too short")
            return
        }

        dispatch(updateTaskDescription({taskId, description}))
        dispatch(reset())
        window.location.reload()
    }

    const handleSubmitPriority = (e) => {
        e.preventDefault()

        if(!priority) {
            alert("No priority")
            return
        }

        dispatch(updateTaskPriority({taskId, priority}))
        dispatch(reset())
        window.location.reload()
    }

    const handleSubmitStatus = (e) => {
        e.preventDefault()
        
        if(!status) {
            alert("No status")
            return
        }

        dispatch(updateTaskStatus({taskId, status}))
        dispatch(reset())
        window.location.reload()
    }

    const handleSubmitType = (e) => {
        e.preventDefault()
        
        if(!type) {
            alert("No status")
            return
        }

        dispatch(updateTaskType({taskId, type}))
        dispatch(reset())
        window.location.reload()
    }

    const handleSubmitDeadline = (e) => {
        e.preventDefault()

        if(!deadline) {
            alert("No deadline")
            return
        }

        const now = new Date().getTime()
        const selectedDeadline = new Date(deadline).getTime()
    

        if( selectedDeadline <= now ) {
            alert('Please select a some time in the future.')
            return
        }

  
        dispatch(updateTaskDeadline({taskId, deadline}))
        dispatch(reset())
        window.location.reload()
        
    }

    return (
        <Grid container spacing={3} sx={{ display: 'flex', flexDirection: 'column', width:"400px", justifyContent: 'center', marginLeft: "5%"}}>
            <Grid item style={{ width: "350px", zIndex: "1", backgroundColor: theme.palette.primary.main, border: "1px solid black", borderRadius: "1rem"}}>
                <Typography variant="h5" style={{ color: theme.palette.text.primary, textAlign: "center", marginBottom: "4%"}}>Update Task!</Typography>
            </Grid>
            <Grid container spacing={3} sx={{ backgroundColor: "white", zIndex: "0", display: 'flex', flexDirection: 'column', paddingTop: "1rem", width:"400px", alignItems: 'center', border: "1px solid black"}}>
                <Grid item >
                    <TextField
                        xs={6}
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
                    <Button xs={6} type='submit' onClick={handleSubmitTitle}>
                        Set Title
                    </Button>
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
                    <Button type='submit' onClick={handleSubmitDescription}>
                        Set Description
                    </Button>
                </Grid>
                <Stack spacing={4} m={2} direction="row">
                    <Grid item>
                        <InputLabel id="priority-select-label">Priority</InputLabel>
                        <Select
                            style={{backgroundColor: theme.palette.background.default}}
                            labelId="priority-select-label"
                            id="priority-simple-select"
                            value={priority}
                            label="Priority"
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <MenuItem value="Low">Low</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="High">High</MenuItem>
                        </Select>
                        <Button type='submit' onClick={handleSubmitPriority}>
                            Set Priority
                        </Button>
                    </Grid>
                    <Grid item>
                        <InputLabel id="status-select-label">Status</InputLabel>
                        <Select
                            style={{backgroundColor: theme.palette.background.default}}
                            labelId="status-select-label"
                            id="status-simple-select"
                            value={status}
                            label="Status"
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <MenuItem value="Created">Created</MenuItem>
                            <MenuItem value="In Progress">In Progress</MenuItem>
                            <MenuItem value="Completed">Completed</MenuItem>
                        </Select>
                        <Button type='submit' onClick={handleSubmitStatus}>
                            Set Status
                        </Button>
                    </Grid>          
                </Stack>
                <Grid item>
                    <InputLabel id="type-select-label">Status</InputLabel>
                    <Select
                        style={{backgroundColor: theme.palette.background.default}}
                        labelId="type-select-label"
                        id="type-simple-select"
                        value={type}
                        label="Type"
                        onChange={(e) => setType(e.target.value)}
                    >
                        <MenuItem value="Feature">Feature</MenuItem>
                        <MenuItem value="Refactor">Refactor</MenuItem>
                        <MenuItem value="Bug Fix">Bug Fix</MenuItem>
                        <MenuItem value="Testing">Testing</MenuItem>
                        <MenuItem value="Documentation">Documentation</MenuItem>
                        <MenuItem value="Misc">Misc</MenuItem>
                    </Select>
                    <Button type='submit' onClick={handleSubmitType}>
                        Set Type
                    </Button>
                </Grid> 
                <Grid item>
                    <FormControl>
                        <inputlabel>Deadline</inputlabel>
                        <input 
                        type="datetime-local" 
                        id="deadline" 
                        name="deadline"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        />
                    </FormControl>
                    <Button type='submit' onClick={handleSubmitDeadline}>
                        Set Deadline
                    </Button>
                </Grid>
            </Grid>
        </Grid>
  )
}

export default TaskUpdateForm