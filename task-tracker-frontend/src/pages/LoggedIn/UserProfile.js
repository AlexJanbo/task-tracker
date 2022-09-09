import { Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ClippedDrawer from '../../components/ClippedDrawer'
import { logout, reset } from '../../features/auth/authSlice'

function UserProfile() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  // console.log(user)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset)
    navigate('/')
  }

  return (
    <>
      <ClippedDrawer />
      <Grid sx={{ display: 'flex', flexDirection: 'column', width: '35%', height: "60%", marginLeft: '25%', marginTop: '10%', border: '.2rem solid black', borderRadius: '.5rem'}}>
        <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '4rem', color: 'black', bgcolor: "orange", borderBottom: '.2rem solid black'}}>
            <Typography textAlign='center' variant='h5'>User Profile</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: 'flex-end', height: '3rem', alignContent:"center"}}>
            <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>First Name</Typography>
            <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Last Name</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'row', flexGrow: 2, justifyContent: 'space-between', height: '5rem', alignItems:"center", flexWrap: 'wrap'}}>
            <Typography variant='h7' width="50%" textAlign="center">{user.firstName}</Typography>
            <Typography variant='h7' width="50%" textAlign="center">{user.lastName}</Typography>
        </Grid>
        <Divider />
        <Grid sx={{ display: 'flex', height: '4rem', justifyContent: 'flex-start', alignItems:"center"}}>
            <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Username</Typography>
            <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Email Address</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', height: '4rem', alignItems:"center"}}>
            <Typography variant='h7' width="50%" textAlign="center">{user.username}</Typography>
            <Typography variant='h7' width="50%" textAlign="center">{user.email}</Typography>
        </Grid>
        <Button variant="text" color="error" onClick={onLogout}>
                    Logout
        </Button>
      </Grid>
    </>
  )
}

export default UserProfile