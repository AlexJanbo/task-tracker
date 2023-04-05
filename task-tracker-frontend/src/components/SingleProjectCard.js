import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteProject } from '../features/projects/projectSlice'

function SingleProjectCard({  projectId, id, title, description }) {

  
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDeleteClick = () => {
        dispatch(deleteProject(projectId))
        navigate('/projects')
    }
  
    return (
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
                    <Link to={`/editProject/${projectId}/`} textAlign="center">
                        <Button color="primary">
                            Edit Project
                        </Button>
                    </Link>
                    <Button variant="contained" color="error" onClick={handleDeleteClick}>
                        Delete Project
                    </Button> 
                </Grid>
            </CardContent>
        </Card>
  )
}

export default SingleProjectCard