import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'

function UserSettings() {
  return (
    <>
        <Box container bgcolor={"#fafafa"} height={"100vh"} >

          <LoggedInNavbar />
          <SideDrawer />
          <Grid sx={{ display: 'flex', flexDirection: 'column', width: '35%', height: "60%", marginLeft: '25%', marginTop: '10%', border: '.2rem solid black', borderRadius: '.5rem'}}>
          <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '4rem', color: 'black', bgcolor: "orange", borderBottom: '.2rem solid black'}}>
              <Typography textAlign='center' variant='h5'>User Settings</Typography>
          </Grid>
          <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: 'flex-end', height: '3rem', alignContent:"center"}}>
              <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Account Profile</Typography>
              <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Appearance</Typography>
          </Grid>
          <Grid sx={{ display: 'flex', flexDirection: 'row', flexGrow: 2, justifyContent: 'space-between', height: '5rem', alignItems:"center", flexWrap: 'wrap'}}>
              <Typography variant='h7' width="50%" textAlign="center"></Typography>
              <Typography variant='h7' width="50%" textAlign="center"></Typography>
          </Grid>
          <Divider />
          <Grid sx={{ display: 'flex', height: '4rem', justifyContent: 'flex-start', alignItems:"center"}}>
              <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Notification</Typography>
              <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Security</Typography>
          </Grid>
          <Grid sx={{ display: 'flex', height: '4rem', alignItems:"center"}}>
              <Typography variant='h7' width="50%" textAlign="center"></Typography>
              <Typography variant='h7' width="50%" textAlign="center"></Typography>
          </Grid>
          </Grid>
        </Box>
    </>
  )
}

export default UserSettings