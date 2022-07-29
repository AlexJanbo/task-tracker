import React from 'react'
import { AppBar, Button, createTheme, Grid, ThemeProvider, Toolbar, Typography } from '@mui/material'
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

  const customTheme = createTheme({
    palette: {
      secondary: {
        main: "#292f4c"
      },
      containedButton: {
        main: "#0d6efd"
      }
    }
  })
  
  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" color={"secondary"} >
          <Toolbar width="100%" style={{ paddingLeft: "0", paddingRight: "0" }}  variant="dense">
            <Typography marginLeft="15%" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={{ textDecoration: 'none' }} to='/' >
                Task Tracker
              </Link>
            </Typography>
            <Grid marginRight="15%">
              {user ?
                <>
                  <Button variant="text" color="inherit" onClick={onLogout}>
                    Logout
                  </Button>
                  <Button variant="contained" color="containedButton" onClick={() => navigate('/dashboard')}>
                    Dashboard
                  </Button>
                </>
              :
                <>
                <Button variant="text" color="inherit">
                  <Link sx={{textDecoration:'none'}} to='/login'>
                    Login
                  </Link>
                </Button>

                <Button variant="contained" color="containedButton">
                  <Link to='/signup'>
                    Sign Up
                  </Link>
                </Button>
                </>
              }
            </Grid>
            
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}

