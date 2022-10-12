import { Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ClippedDrawer from '../../components/ClippedDrawer'
import UserProfileCard from '../../components/UserProfileCard'
import { logout, reset } from '../../features/auth/authSlice'

function UserProfile() {



  return (
    <>
          <ClippedDrawer />
          <UserProfileCard />
    </>
  )
}

export default UserProfile