import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import taskTrackerLogo from '../images/track.svg'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

export default function Navbar() {
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
        </Box>
    </AppBar>
  )
}

