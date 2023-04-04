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
      <SideDrawer />
        <Stack direction="row" spacing={4} style={{ marginLeft: "15%"}}>
          <UserProfilePicture />
          <UserProfileInformation />
        </Stack>


      </Box>
    </>
  )
}

export default UserProfile