import { Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteTask } from '../features/tasks/taskSlice'

function SingleTaskCard({ id, title, description, priority, status }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDeleteClick = () => {
        dispatch(deleteTask(id))
        navigate('/tasks')
    }

  return (
    <Grid container sx={{ height: "40vh", display: 'flex', flexDirection: 'column', marginTop: '15%', border: '2px solid black', borderRadius: '.5rem'}}>
        <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '4rem', color: 'black', bgcolor: "orange", borderBottom: '.2rem solid black'}}>
            <Typography textAlign='center' variant='h3'>Task Details</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: 'center', height: '3rem', alignContent:"center"}}>
            <Typography variant='h6' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold">Title:</Typography>
            <Typography variant='h7' width="50%" textAlign="center">{title}</Typography>
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: "center", height: '3rem', alignContent:"center"}}>
            <Typography variant='h6' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" >Description:</Typography>
            <Typography variant='h7' width="50%" textAlign="center">{description}</Typography>
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: "center", height: '3rem', alignContent:"center"}}>
            <Typography variant='h6' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" >Priority:</Typography>
            <Typography variant='h7' width="50%" textAlign="center">{priority}</Typography>
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: "center", height: '3rem', alignContent:"center"}}>
            <Typography variant='h6' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" >Status:</Typography>
            <Typography variant='h7' width="50%" textAlign="center">{status}</Typography>
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'flex', height: '4rem', justifyContent: 'center', alignItems: "center"}}>
            <Grid item>
                <Link to={`/edit-task/${id}`}>
                    <Button color="primary">
                        Edit Task
                    </Button>
                </Link>
            </Grid>
            <Grid item>
                <Button variant="contained" color="error" onClick={handleDeleteClick}>
                    Delete Task
                </Button> 
            </Grid>
        </Grid>
    </Grid>
  )
}

export default SingleTaskCard