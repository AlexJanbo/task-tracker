import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, FormControl, useTheme, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material'
import { reset, updateTask } from '../features/tasks/taskSlice'
import { useNavigate } from 'react-router-dom'



function TaskUpdateForm({ taskId, titleProp, descriptionProp, priorityProp, statusProp }) {

    const theme = useTheme()
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
        navigate('/tasks')
    }

    return (
        <Grid container spacing={3} sx={{ display: 'flex', flexDirection: 'column', width:"400px", justifyContent: 'center', marginLeft: "5%"}}>
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
                <Stack spacing={4} m={2} direction="row">
                    <Grid item>
                        {/* <FormControl>
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
                        </FormControl> */}
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
                    </Grid>
                    <Grid item>
                        {/* <FormControl>
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
                        </FormControl> */}
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
                    </Grid>
                    
                </Stack>

                <Button type='submit' onClick={handleSubmit}>
                    Update
                </Button>
            </Grid>
        </Grid>
  )
}

export default TaskUpdateForm