import { Button, Card, CardContent, Divider, Grid, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteTask } from '../features/tasks/taskSlice'
import { useTheme } from '@mui/material'

function SingleTaskCard({ id, title, description, priority, status, deadline, created }) {
    
    const theme = useTheme()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDeleteClick = () => {
        dispatch(deleteTask(id))
        navigate('/tasks')
    }

    const formatDate = (date) => {
        let formattedDate = new Date(date).toLocaleString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        })
        return formattedDate
    }


  return (
    <>
        <Card style={{ maxWidth: 400, border: "2px solid blue", borderRadius: "5%"}}>
            <CardContent >
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Typography variant="h5" component="h2">
                    {title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" component="p">
                    {description}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Status: {status}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Priority: {priority}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" color="textSecondary" component="p">
                    ID: {id}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Created: {formatDate(created)}
                    </Typography>
                </Grid>
                {
                    deadline ?
                    <Grid item xs={12}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Deadline: {formatDate(deadline)}
                        </Typography>
                    </Grid>
                    :
                    <Grid item xs={12}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Deadline: None
                        </Typography>
                    </Grid>

                }
                <Grid item>
                    <Link to={`/edit-task/${id}`}>
                        <Button color="primary" style={{ textDecoration: "none"}}>
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
            </CardContent>
        </Card>
    </>
  )
}

export default SingleTaskCard