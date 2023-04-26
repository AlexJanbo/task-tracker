import { Button, Card, CardContent, Divider, FormControlLabel, FormGroup, Grid, Switch, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'

function UserProfileInformation(props) {

    const theme = useTheme()

    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user } = useSelector((state) => state.auth)
    // console.log(user)


  
    const onLogout = () => {
      dispatch(logout())
      dispatch(reset)
      navigate('/')
    }

  return (
    <Card style={{ backgroundColor: theme.palette.background.paper, maxWidth: "30%", maxHeight: "50rem", marginTop: "4rem"}}>
      <CardContent>
        <Grid container spacing={2} style={{ color: theme.palette.text.primary}}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2">
              Profile Information
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Username:</Typography>
            <Typography variant="body1">{user.username}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">First Name:</Typography>
            <Typography variant="body1">{user.firstName}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Last Name:</Typography>
            <Typography variant="body1">{user.lastName}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Email:</Typography>
            <Typography variant="body1">{user.email}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2">
              Settings
            </Typography>
          </Grid>
          <Grid item xs={12}>
              <Link to={`/edit-user/`}>
                  <Button color="primary">
                      Edit Profile Information
                  </Button>
              </Link>
          </Grid>
          <Grid item xs={12}>
              <Link to={`/change-password/`}>
                  <Button color="primary">
                      Change Password
                  </Button>
              </Link>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Theme</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Notifications</Typography>
          </Grid>
          <Grid item xs={12}>
              <Button color="error" variant="contained" onClick={onLogout}>
                  Logout
              </Button> 
          </Grid>
          {/* <FormGroup>
            <FormControlLabel control={<Switch onChange={props.handleChangeDarkMode} defaultChecked />} label="Label" />
          </FormGroup> */}
          {/* <Button onChange={props.onChangeDarkMode}>
            Change Theme
          </Button> */}
        </Grid>
      </CardContent>
    </Card>
    
  )
}

export default UserProfileInformation