import { Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'

function UserProfileInformation() {


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
    <Grid container sx={{ display: 'flex', flexDirection: 'column', width: '20%', height: "60%", marginLeft: '15%', marginTop: '10%', border: '.2rem solid black', borderRadius: '.5rem'}}>
        <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '4rem', color: 'black', bgcolor: "orange", borderBottom: '.2rem solid black'}}>
            <Typography textAlign='center' variant='h5'>Profile Information</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: 'flex-end', height: '3rem', alignContent:"center"}}>
            <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Username</Typography>
            <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Email Address</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', flexDirection: 'row', flexGrow: 2, justifyContent: 'space-between', height: '5rem', alignItems:"center", flexWrap: 'wrap'}}>
            <Typography variant='h7' width="50%" textAlign="center">{user.username}</Typography>
            <Typography variant='h7' width="50%" textAlign="center">{user.email}</Typography>
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'flex', height: '4rem', justifyContent: 'flex-start', alignItems:"center"}}>
            <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>First Name</Typography>
            <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Last Name</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', height: '4rem', alignItems:"center"}}>
            <Typography variant='h7' width="50%" textAlign="center">{user.firstName}</Typography>
            <Typography variant='h7' width="50%" textAlign="center">{user.lastName}</Typography>
        </Grid>
        
        <Grid item>
            <Link to={`/edit-user/`}>
                <Button color="primary">
                    Edit Profile Information
                </Button>
            </Link>
        </Grid>
        <Grid item>
            <Link to={`/change-password/`}>
                <Button color="primary">
                    Change Password
                </Button>
            </Link>
        </Grid>
        <Grid item>
            <Button color="error" onClick={onLogout}>
                Logout
            </Button> 
        </Grid>
    </Grid>

    
  )
}

export default UserProfileInformation