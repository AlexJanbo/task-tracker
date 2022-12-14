import React, { useEffect } from 'react'
import { Button, Divider, Grid, Typography} from '@mui/material'
import ClippedDrawer from '../../components/ClippedDrawer'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getTasks, reset } from '../../features/tasks/taskSlice'
import Navbar from '../../components/Navbar'


function Dashboard() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    const { tasks } = useSelector((state) => state.tasks)

    const { isLoading, isError, message } = useSelector((state) => state.tasks) 

    useEffect(() => {
        if(isError) {
        console.log(message)
        }

        if(!user) {
        Navigate('/')
        }

        dispatch(getTasks())


        return () => {
        dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])
    
    const highTask = tasks.filter((task) => {
        return task.priority === "High"
    })
    console.log(highTask)

  return(
    <>
        <ClippedDrawer />
        <Grid container marginLeft="12.5%" marginTop="3%">
            <Typography variant="h3">
                Welcome {user && user.firstName}!
            </Typography>
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'column', width: '35%', height: "60%", marginLeft: '25%', marginTop: '10%', border: '.2rem solid black', borderRadius: '.5rem'}}>
        <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '4rem', color: 'black', bgcolor: "orange", borderBottom: '.2rem solid black'}}>
            <Typography textAlign='center' variant='h5'>Dashboard</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: 'flex-end', height: '3rem', alignContent:"center"}}>
            <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Current High Priority Tasks</Typography>
            <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>New Tasks Assigned to Me</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'row', flexGrow: 2, justifyContent: 'space-between', height: '5rem', alignItems:"center", flexWrap: 'wrap'}}>
                <Typography variant='h7' width="50%" textAlign="center">
                    { highTask[0] && highTask[0].title }
                    { highTask[0] && 
                        <Link to={`/tasks/${highTask[0]._id}/`}>
                            <Button>
                            View
                            </Button>
                        </Link>
                    }
                </Typography>
            <Typography variant='h7' width="50%" textAlign="center"></Typography>
        </Grid>
        <Divider />
        <Grid sx={{ display: 'flex', height: '4rem', justifyContent: 'flex-start', alignItems:"center"}}>
            <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Recent Changes to Tasks</Typography>
            <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Select today's task from list?</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', height: '4rem', alignItems:"center"}}>
            <Typography variant='h7' width="50%" textAlign="center"></Typography>
            <Typography variant='h7' width="50%" textAlign="center"></Typography>
        </Grid>
        </Grid>
  </>
  )
}

export default Dashboard