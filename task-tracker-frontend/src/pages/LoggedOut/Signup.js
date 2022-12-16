import { Box, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../../features/auth/authSlice'
import LoggedOutNavbar from '../../components/LoggedOutNavbar'
 
function Signup() {

  const [formValues, setFormValues] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }) 

  const { username, firstName, lastName, email, password, confirmPassword }   = formValues

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message } 
  = useSelector(
      (state) => state.auth
    )  
  
  useEffect(() => {
    if(isError) {
      toast.error(message)
    }


    if(isSuccess || user) {
      navigate('/dashboard')
    }
    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])
  
  const handleInputChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  if(isLoading) {
    return <CircularProgress />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)

    if(password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        username,
        firstName,
        lastName,
        email, 
        password,
      }
      dispatch(register(userData))

    }
  }
  
  if(isLoading) {
    <CircularProgress />
  }

  return (
    <>
      <LoggedOutNavbar />
      <Box sx={{ 
        border: '.25rem solid #292f4c',
        borderRadius: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        justifyItems: 'center',
        alignItems: 'center',
        alignContent: 'flex-start',
        width: '20%',
        height: '30rem',
        marginTop: '5%',
        marginLeft: '40%'
        }}
      >

        <Typography variant='h4' sx={{ marginTop: "1.5rem"}}>Registration</Typography>

        <Grid>
          <form onSubmit={handleSubmit}>
            <Grid>
              <Grid item>
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  type="text"
                  value={username}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  type="text"
                  value={firstName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  type="text"
                  value={lastName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  type="text"
                  value={email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={handleInputChange}
                />
              </Grid>
              <Button  variant='contained' type='submit' onClick={handleSubmit}>
                Sign Up
              </Button>
            </Grid>
          </form>
        </Grid>
      </Box>

    </>
  )
}

export default Signup