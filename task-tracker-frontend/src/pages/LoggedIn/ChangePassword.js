import { Box, Grid, useTheme } from '@mui/material'
import React from 'react'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import PasswordUpdateForm from '../../components/PasswordUpdateForm'
import SideDrawer from '../../components/SideDrawer'
import ChangePasswordBreadcrumbs from '../../components/ChangePasswordBreadcrumbs'

function ChangePassword() {

  const theme = useTheme()
  return (
    <>
      <LoggedInNavbar />
      <Box container bgcolor={theme.palette.background.default} height={"100vh"}>
        <SideDrawer />
        <Grid container>
            <Grid item style={{ marginLeft: "15%", marginTop: "4rem"}}>
                <ChangePasswordBreadcrumbs />
                <PasswordUpdateForm />
            </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ChangePassword