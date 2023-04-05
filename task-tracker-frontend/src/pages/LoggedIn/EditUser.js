import { Box, Grid } from '@mui/material'
import React from 'react'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'
import UserUpdateForm from '../../components/UserUpdateForm'
import EditProfileBreadcrumbs from '../../components/EditProfileBreadcrumbs'

function EditUser() {
  return (
    <>
      <LoggedInNavbar />
      <Box bgcolor={"#fafafa"} height={"100vh"}>
        <SideDrawer /> 
          <Grid container>
            <Grid item style={{ marginLeft: "15%", marginTop: "4rem"}}>
              <EditProfileBreadcrumbs />
              <UserUpdateForm />
            </Grid>
          </Grid>
      </Box>
    </>
    
  )
}

export default EditUser