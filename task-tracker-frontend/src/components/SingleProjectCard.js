import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteProject } from '../features/projects/projectSlice'

function SingleProjectCard({  id, title, description }) {
  
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDeleteClick = () => {
        dispatch(deleteProject(id))
        navigate('/projects')
    }
  
    return (
        <Grid container sx={{ display: 'flex', flexDirection: 'column', width: '35%', height: "60%", marginLeft: '15%', marginTop: '10%', border: '.2rem solid black', borderRadius: '.5rem'}}>
        <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '4rem', color: 'black', bgcolor: "orange", borderBottom: '.2rem solid black'}}>
            <Typography textAlign='center' variant='h5'>Details for Project: {title}</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: 'flex-end', height: '3rem', alignContent:"center"}}>
            <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Project Title</Typography>
            <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Project Description</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', flexDirection: 'row', flexGrow: 2, justifyContent: 'space-between', height: '5rem', alignItems:"center", flexWrap: 'wrap'}}>
            <Typography variant='h7' width="50%" textAlign="center">{title}</Typography>
            <Typography variant='h7' width="50%" textAlign="center">{description}</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', height: '4rem', justifyContent: 'center', justifyItems:"center"}}>
            <Link to={`/editProject/${id}/`} textAlign="center">
                <Button color="primary">
                    Edit Project
                </Button>
            </Link>
            <Button variant="contained" color="error" onClick={handleDeleteClick}>
                Delete Project
            </Button> 
        </Grid>
    </Grid>
  )
}

export default SingleProjectCard