import { Box, Grid } from '@mui/material'
import React from 'react'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import PasswordUpdateForm from '../../components/PasswordUpdateForm'
import SideDrawer from '../../components/SideDrawer'

function ChangePassword() {
  return (
    <>
      <LoggedInNavbar />
      <Box bgcolor={"#fafafa"} height={"100vh"}>
        <SideDrawer />
        <Grid container>
            <Grid item style={{ marginLeft: "15%", marginTop: "4rem"}}>
                <PasswordUpdateForm />
            </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ChangePassword