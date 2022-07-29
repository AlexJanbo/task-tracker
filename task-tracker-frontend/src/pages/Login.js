import { Box, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'

function Login() {

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  }) 

  const { email, password } = formValues

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)  
  
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
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const userData = {
      email,
      password
    }

    dispatch(login(userData))


  }
  
  if(isLoading) {
    return <CircularProgress />
  }


  return (
    <>
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
        <Typography variant='h4' sx={{ marginTop: "1.5rem"}}>Task Tracker Login</Typography>
        

        <form onSubmit={handleSubmit}>
          <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Grid item sx={{ marginTop: "1.5rem", marginBottom: '1rem'}}>
              <TextField
                id="email"
                name="email"
                label="Email Address *"
                type="text"
                value={email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item sx={{ marginBottom: '1.5rem'}}>
              <TextField
                id="password"
                name="password"
                label="Password *"
                type="password"
                value={password}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item>
              <Button variant='contained' size='large' type='submit'>
                Login
              </Button>
            </Grid>
          </Grid>
        </form> 

        <Typography sx={{ marginTop: '2rem'}}>Forgot your Password?</Typography>
        <Typography sx={{ marginTop: '.5rem'}}>Creat an account? Sign Up</Typography>
        <Typography sx={{ marginTop: '.5rem'}}>Sign in as a Demo User</Typography>


      </Box>
    </>
  )
}

export default Login