import { Box, Stack } from '@mui/material'
import React from 'react'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'
import UserProfilePicture from '../../components/UserProfilePicture'
import UserProfileInformation from '../../components/UserProfileInformation'

function UserProfile() {



  return (
    <>
      <LoggedInNavbar />
      <Box container bgcolor={"#fafafa"} height={"100%"}>
        <Stack direction="row" spacing={2} justifyContent="space-between" >
          <SideDrawer />
          <UserProfilePicture />
          <UserProfileInformation />
          </Stack>


      </Box>
    </>
  )
}

export default UserProfile