import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import taskTrackerLogo from '../images/track.svg'
import { Box } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

export default function Navbar() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset)
    navigate('/')
  }
  
  return (
    <AppBar sx={{
      position: "sticky",
      m: 0,
      p: 0,
      height: "4rem",
    }}>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
            position: "inherit",
          }}>
          <Toolbar>
            <Link to='/'>
              <img 
                src={taskTrackerLogo} 
                alt="sup" 
                height="30px" 
                width="30px" 
                color="white"
                />
            </Link>
            <Typography 
              variant="span" 
              fontSize="2rem"
            >
              <Link to='/'>
                Task Tracker
              </Link>
              
            </Typography>
          </Toolbar>
          {user ?
            <Toolbar>
              <Button variant="contained" color="error" size="large" onClick={onLogout}>
                Logout
              </Button>
            </Toolbar>
            :
            <Toolbar>
              <Button variant="text" color="error" size="large">
                <Link to='/login'>
                  Log In
                </Link>
              </Button>            
              <Button variant="contained">
                <Link to='/signup'>
                  Try for free
                </Link>
              </Button>
            </Toolbar>
          }
        </Box>
    </AppBar>
  )
}

