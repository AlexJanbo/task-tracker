import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography, useTheme } from '@mui/material'
import { createTask } from '../features/tasks/taskSlice'



function TaskForm() {

    const theme = useTheme()

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
      <Box flex={1} p={2} sx={{ display: { xs: "none", lg: "block" } }}>
        <Grid container spacing={3} sx={{ marginTop: "50%", display: 'flex', flexDirection: 'column'}}>
            <Grid item style={{ marginRight: "5%", zIndex: "1", backgroundColor: theme.palette.primary.main, border: "1px solid black", borderRadius: "1rem"}}>
              <Typography variant="h5" style={{ color: theme.palette.text.primary, textAlign: "center", marginBottom: "4%"}}>Create a New Task!</Typography>
            </Grid>
            <Grid container spacing={3} sx={{ backgroundColor: "white", zIndex: "0", display: 'flex', flexDirection: 'column', paddingTop: "1rem", width:"400px", alignItems: 'center', border: "1px solid black"}}>        
              <Grid item>
                  <TextField
                    style={{ backgroundColor: theme.palette.background.default}}
                    id="title"
                    name="title"
                    label="Title"
                    type="text"
                    multiline 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
              </Grid>
              <Grid item>
                  <TextField
                    style={{ backgroundColor: theme.palette.background.default}}
                    id="description"
                    name="description"
                    label="Description"
                    type="text"
                    multiline
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

              <Button  type='submit' onClick={handleSubmit}>
                  Create Task
              </Button>
            </Grid>
        </Grid>
      </Box>
  )
}

export default TaskForm