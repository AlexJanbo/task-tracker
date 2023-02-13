import { Box, Stack } from '@mui/material'
import React from 'react'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'

function ManageRoles() {
  return (
    <>
      <LoggedInNavbar />
      <Box container bgcolor={"#fafafa"} sx={{ flex: 1}}>
        <Stack direction="row" spacing={4} justifyContent="space-between" >
          <SideDrawer />
        </Stack>
      </Box>
    </>
  )
}

export default ManageRoles