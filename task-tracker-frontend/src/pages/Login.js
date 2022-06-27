import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'

function Login() {

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  }) 

  const { email, password } = formValues
  
  const handleInputChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
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
          <Button  type='submit' onClick={handleSubmit}>
            Login
          </Button>
        </Grid>

      </form>
    </>
  )
}

export default Login