import React, { useState } from 'react'
import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset, updateUser } from '../features/auth/authSlice'

function UserUpdateForm() {

    const { user } = useSelector(state => state.auth)
    console.log(user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ username, setUsername ] = useState(user.username)
    const [ firstName, setFirstName ] = useState(user.firstName)
    const [ lastName, setLastName ] = useState(user.lastName)
    const [ email, setEmail ] = useState(user.email)

    const handleSubmit = (e) => {
        e.preventDefault()
 
        dispatch(updateUser({ username, firstName, lastName, email }))
        dispatch(reset())
        // window.location.reload()
    }
    
    return (
        <Grid container spacing={3} sx={{ display: 'flex', flexDirection: 'column', width:"400px", justifyContent: 'center', marginLeft: '15%', marginTop: "5%"}}>
            <Grid item style={{ width: "350px", zIndex: "1", backgroundColor: "orange", border: "2px solid black", borderRadius: "1rem"}}>
                <Typography variant="h4" style={{ textAlign: "center", marginBottom: "4%"}}>Profile Information!</Typography>
            </Grid>
            <Grid container spacing={3} sx={{ zIndex: "0", display: 'flex', flexDirection: 'column', paddingTop: "1rem", width:"400px", alignItems: 'center', border: "1px solid black"}}>
                <Grid item>
                    <TextField
                        id="username"
                        name="username"
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="email"
                        name="email"
                        label="Email Address"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Stack direction="row" spacing={4} >
                    <Button onClick={() => navigate("/user-profile")}>
                        Back
                    </Button>
                    <Button type='submit' onClick={handleSubmit}>
                        Update!
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    )

}
        

export default UserUpdateForm