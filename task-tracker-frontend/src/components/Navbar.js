import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import taskTrackerLogo from '../images/track.svg'
import { Box } from '@mui/system'

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
            <img 
              src={taskTrackerLogo} 
              alt="sup" 
              height="30px" 
              width="30px" 
              color="white"
            />
            <Typography 
              variant="span" 
              fontSize="2rem"
            >
              Task Tracker
            </Typography>
          </Toolbar>
          <Toolbar>
            <Button variant="text" color="error" size="large">Log In</Button>
            <Button variant="contained">Try For Free</Button>
          </Toolbar>
        </Box>
    </AppBar>
  )
}

