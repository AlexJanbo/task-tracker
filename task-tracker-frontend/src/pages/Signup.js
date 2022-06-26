import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'

function Signup() {

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  }) 

  const { name, email, password, confirmPassword } = formValues
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    })
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
            Submit
          </Button>
        </Grid>

      </form>
    </>
  )
}

export default Signup