import { Box } from '@mui/material'
import React from 'react'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'
import UserUpdateForm from '../../components/UserUpdateForm'

function EditUser() {
  return (
    <>
      <LoggedInNavbar />
      <Box bgcolor={"#fafafa"} height={"100vh"}>
        <SideDrawer /> 
        <UserUpdateForm />
      </Box>
    </>
    
  )
}

export default EditUser