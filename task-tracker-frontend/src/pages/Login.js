import { Button, CircularProgress, Grid, TextField } from '@mui/material'
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
      navigate('/')
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
      <form onSubmit={handleSubmit}>
        <Grid>
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
        </Grid>
          <Button variant='contained' type='submit' onClick={handleSubmit}>
            Login
          </Button>
      </form>
    </>
  )
}

export default Login