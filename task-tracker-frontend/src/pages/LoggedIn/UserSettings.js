import { Box } from '@mui/material'
import React from 'react'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'
import UserSettingTable from '../../components/UserSettingTable'

function UserSettings() {
  return (
    <>
        <LoggedInNavbar />
        <Box container bgcolor={"#fafafa"} height={"100vh"} >

          <SideDrawer />
          <UserSettingTable />
        </Box>
    </>
  )
}

export default UserSettings