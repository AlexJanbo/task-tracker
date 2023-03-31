import { Button, Card, CardContent, Divider, Grid, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteTask } from '../features/tasks/taskSlice'
import { useTheme } from '@mui/material'

function SingleTaskCard({ id, title, description, priority, status }) {
    
    const theme = useTheme()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDeleteClick = () => {
        dispatch(deleteTask(id))
        navigate('/tasks')
    }

  return (
    <>
        <Card display="flex" sx={{ minWidth: 275, border: "1px solid black"}}>
                <Grid style={{ width: '100%', height: "inherit", backgroundColor: theme.palette.primary.main, margin: "0", padding: "0"}} >
                    <Typography m={0} p={0} variant="h2" textAlign="center" style={{ color: theme.palette.text.primary}}>
                        {title}
                    </Typography>
                </Grid>
                <Divider/>
                <Grid container>
                    <Grid item style={{ minWidth: "50%"}}>
                        <Typography variant="h5" textAlign="center">
                            Description
                        </Typography>
                    </Grid>
                    <Grid item style={{ maxWidth: "50%"}}>
                        <Typography variant="h6" textAlign="center">
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
                <Divider/>
                <Grid container>
                    <Grid item style={{ minWidth: "50%"}}>
                        <Typography variant="h5" textAlign="center">
                            Priority
                        </Typography>
                    </Grid>
                    <Grid item style={{ maxWidth: "50%"}}>
                        <Typography variant="h6" textAlign="center">
                            {priority}
                        </Typography>
                    </Grid>
                </Grid>
                <Divider/>
                <Grid container>
                    <Grid item style={{ minWidth: "50%"}}>
                        <Typography variant="h5" textAlign="center">
                            Status
                        </Typography>
                    </Grid>
                    <Grid item style={{ maxWidth: "50%"}}>
                        <Typography variant="h6" textAlign="center">
                            {status}
                        </Typography>
                    </Grid>
                </Grid>
                <Divider/>
                <Grid container>
                    <Grid item style={{ minWidth: "50%"}}>
                        <Typography variant="h5" textAlign="center">
                            ID
                        </Typography>
                    </Grid>
                    <Grid item style={{ maxWidth: "50%"}}>
                        <Typography variant="h6" textAlign="center">
                            {id}
                        </Typography>
                    </Grid>
                </Grid>
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
        </Card>
    </>
  )
}

export default SingleTaskCard