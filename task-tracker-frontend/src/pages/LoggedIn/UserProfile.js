import React from 'react'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'
import UserProfileCard from '../../components/UserProfileCard'

function UserProfile() {



  return (
    <>
      <LoggedInNavbar />
      <SideDrawer />
      <UserProfileCard />
    </>
  )
}

export default UserProfile