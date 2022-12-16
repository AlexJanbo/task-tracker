import React from 'react'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'
import UserUpdateForm from '../../components/UserUpdateForm'

function EditUser() {
  return (
    <>
      <LoggedInNavbar />
      <SideDrawer /> 
      <UserUpdateForm />
    </>
    
  )
}

export default EditUser