import { CircularProgress, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ClippedDrawer from '../../components/ClippedDrawer'
import GroupProjectForm from '../../components/GroupProjectForm'
import { getGroupProjects, reset } from '../../features/group-projects/groupProjectSlice'

function GroupProjects() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { groupProjects } = useSelector((state) => state.groupProjects) 
  console.log(groupProjects)

  const { user } = useSelector((state) => state.auth)
  // console.log(user)
  const { isLoading, isError, message } = useSelector((state) => state.groupProjects) 

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if(!user) {
      navigate('/')
    }

    dispatch(getGroupProjects())


    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
  }

  return (
    <>
        {/* Create a Header for that says Group Projects
        Create a table that has Project Name, Project Description, and buttons for details and manage users */}
        <ClippedDrawer />
        <Grid sx={{ display: 'flex', flexDirection: 'column', width: '35%', height: "60%", marginLeft: '25%', marginTop: '10%', border: '.2rem solid black', borderRadius: '.5rem'}}>
            <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '4rem', color: 'black', bgcolor: "orange", borderBottom: '.2rem solid black'}}>
                <Typography textAlign='center' variant='h5'>My Group Projects</Typography>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: 'flex-end', height: '3rem', alignContent:"center"}}>
                <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Project Name</Typography>
                <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Project Description</Typography>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row', flexGrow: 2, justifyContent: 'space-between', height: '5rem', alignItems:"center", flexWrap: 'wrap'}}>
                <Typography variant='h7' width="50%" textAlign="center"></Typography>
                <Typography variant='h7' width="50%" textAlign="center"></Typography>
            </Grid>
            <Divider />
            <Grid sx={{ display: 'flex', height: '4rem', justifyContent: 'flex-start', alignItems:"center"}}>
                <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Group Members</Typography>
            </Grid>
            <Grid sx={{ display: 'flex', height: '4rem', alignItems:"center"}}>
                <Typography variant='h7' width="50%" textAlign="center"></Typography>
            </Grid>
            <Divider />
            <Grid sx={{ display: 'flex', height: '4rem', justifyContent: 'flex-start', alignItems:"center"}}>
                <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Edit Project</Typography>
                <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>View Project</Typography>
            </Grid>
            <Grid sx={{ display: 'flex', height: '4rem', alignItems:"center"}}>
                <Typography variant='h7' width="50%" textAlign="center"></Typography>
                <Typography variant='h7' width="50%" textAlign="center"></Typography>
            </Grid>
            <GroupProjectForm />
        </Grid>
    </>
  )
}

export default GroupProjects