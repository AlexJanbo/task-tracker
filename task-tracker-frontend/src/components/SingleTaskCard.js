import { Button, Card, CardContent, Divider, Grid, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
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
    // <Grid container sx={{ maxHeight: "40vh", maxWidth: "35rem", display: 'flex', flexDirection: 'column', marginTop: '15%', border: '2px solid black', borderRadius: '.5rem'}}>
    //     <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'black', bgcolor: "orange", borderBottom: '.2rem solid black'}}>
    //         <Typography textAlign='center' variant='h3'>Task Details</Typography>
    //     </Grid>
    //     <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: 'center', height: '3rem', alignContent:"center"}}>
    //         <Typography variant='h6' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold">Title:</Typography>
    //         <Typography variant='h7' width="50%" textAlign="center">{title}</Typography>
    //     </Grid>
    //     <Divider />
    //     <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: "center", height: '3rem', alignContent:"center"}}>
    //         <Typography variant='h6' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" >Description:</Typography>
    //         <Typography variant='h7' width="50%" textAlign="center">{description}</Typography>
    //     </Grid>
    //     <Divider />
    //     <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: "center", height: '3rem', alignContent:"center"}}>
    //         <Typography variant='h6' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" >Priority:</Typography>
    //         <Typography variant='h7' width="50%" textAlign="center">{priority}</Typography>
    //     </Grid>
    //     <Divider />
    //     <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: "center", height: '3rem', alignContent:"center"}}>
    //         <Typography variant='h6' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" >Status:</Typography>
    //         <Typography variant='h7' width="50%" textAlign="center">{status}</Typography>
    //     </Grid>
    //     <Divider />
    //     <Grid item sx={{ display: 'flex', height: '4rem', justifyContent: 'center', alignItems: "center"}}>
    //         <Grid item>
    //             <Link to={`/edit-task/${id}`}>
    //                 <Button color="primary">
    //                     Edit Task
    //                 </Button>
    //             </Link>
    //         </Grid>
    //         <Grid item>
    //             <Button variant="contained" color="error" onClick={handleDeleteClick}>
    //                 Delete Task
    //             </Button> 
    //         </Grid>
    //     </Grid>
    // </Grid>
    <>
        <Card display="flex" sx={{ minWidth: 275, marginTop: "15%", border: "1px solid black"}}>
            <CardContent>
                <Grid sx={{ borderBottom: '1px solid black'}}>

                    <Typography variant="h2" textAlign="center">
                        {title}
                    </Typography>
                </Grid>
                <Divider/>
                <Typography variant="h5" textAlign="center">
                    {description}
                </Typography>
                <Typography variant="h6" textAlign="center">
                    Task priority: {priority}
                </Typography>
                <Typography variant="h6" textAlign="center">
                    Status: {status} 
                </Typography>
                <Typography textAlign="center">
                    Id: {id}
                </Typography>
            </CardContent>
        </Card>
    </>
  )
}

export default SingleTaskCard