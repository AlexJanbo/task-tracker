import { Button, CircularProgress, Grid, TextField } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
 
function Signup() {

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  }) 

  const { name, email, password, confirmPassword }   = formValues

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
      navigate('/')
    }
    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])
  
  const handleInputChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)

    if(password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name, 
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
      <form onSubmit={handleSubmit}>
        <Grid>
          <Grid item>
            <TextField
              id="name"
              name="name"
              label="Name"
              type="text"
              value={name}
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
          <Button  type='submit' onClick={handleSubmit}>
            Sign Up
          </Button>
        </Grid>

      </form>
    </>
  )
}

export default Signup