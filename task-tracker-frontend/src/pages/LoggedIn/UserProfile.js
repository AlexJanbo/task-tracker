import { Box, Button, Stack, Switch, useTheme } from '@mui/material'
import React from 'react'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'
import UserProfilePicture from '../../components/UserProfilePicture'
import UserProfileInformation from '../../components/UserProfileInformation'

function UserProfile({check,change}) {

  const theme = useTheme()

  return (
    <>
      <LoggedInNavbar />
      <Box container bgcolor={theme.palette.background.default} height={"100vh"}>
      <SideDrawer />
        <Stack direction="row" spacing={4} style={{ marginLeft: "15%"}}>
          <UserProfilePicture />
          <UserProfileInformation onChange={change} checked={check}/>
          {/* <Button onChange={handleThemeChange}>
            Change Theme
          </Button> */}
          <Switch
            defaultChecked
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            onChange={change}
            checked={check}
          />
        </Stack>


      </Box>
    </>
  )
}

export default UserProfile