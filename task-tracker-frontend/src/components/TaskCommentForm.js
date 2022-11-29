import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTaskComment, reset } from '../features/tasks/taskSlice'

function TaskCommentForm({ id }) {

    const { user } = useSelector((state) => state.auth)
  
    const [ comments, setComments ] = useState('')

    const dispatch = useDispatch()

    console.log(id)
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addTaskComment({id, comments}))
        dispatch(reset())
        window.location.reload()
    }
  
    return (
        <Grid container spacing={3} sx={{ marginLeft: "15%", marginTop: "3%", display: 'flex', flexDirection: 'column', width:"400px", justifyContent: 'center'}}>
            <Grid item style={{ width: "350px", zIndex: "1", backgroundColor: "orange", border: "2px solid black", borderRadius: "1rem"}}>
                <Typography variant="h4" style={{ textAlign: "center", marginBottom: "4%"}}>Add Comment!</Typography>
            </Grid>
            <Grid container spacing={3} sx={{ zIndex: "0", display: 'flex', flexDirection: 'column', paddingTop: "1rem", width:"400px", alignItems: 'center', border: "1px solid black"}}>
                <Grid item>
                    <TextField
                        id="comment"
                        name="comment"
                        label="Comment"
                        type="text"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                </Grid>
                <Button variant="contained" type='submit' onClick={handleSubmit}>
                    Add
                </Button>
            </Grid>
        </Grid>
    )
}

export default TaskCommentForm