import { Box, Stack } from '@mui/material'
import React from 'react'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'
import UserProfileImage from '../../components/UserProfileImage'
import UserProfileInformation from '../../components/UserProfileInformation'

function UserProfile() {



  return (
    <>
      <Box container bgcolor={"#fafafa"} height={"100%"}>
        <LoggedInNavbar />

          <SideDrawer />
          <UserProfileImage />
          <UserProfileInformation />


      </Box>
    </>
  )
}

export default UserProfile