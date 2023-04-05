import React, { useState } from 'react'
import { Button, Grid, Stack, TextField, Typography, useTheme } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset, updateUser } from '../features/auth/authSlice'

function UserUpdateForm() {

    const theme = useTheme()

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
        <Grid container spacing={3} sx={{ display: 'flex', flexDirection: 'column', width:"400px", justifyContent: 'center', marginLeft: '10%', marginTop: "5%"}}>
            <Grid item style={{ width: "350px", zIndex: "1", backgroundColor: theme.palette.primary.main, border: "1px solid black", borderRadius: "1rem"}}>
                <Typography variant="h5" style={{ textAlign: "center", marginBottom: "4%", color: theme.palette.text.primary}}>Profile Information!</Typography>
            </Grid>
            <Grid container spacing={4} sx={{  backgroundColor: "white", zIndex: "0", display: 'flex', flexDirection: 'column', paddingTop: "1rem", width:"400px", alignItems: 'center', border: "1px solid black"}}>
                <Grid item xs={12}>
                    <TextField
                        style={{ backgroundColor: theme.palette.background.default}}
                        id="username"
                        name="username"
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        style={{ backgroundColor: theme.palette.background.default}}
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        style={{ backgroundColor: theme.palette.background.default}}
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        style={{ backgroundColor: theme.palette.background.default}}
                        id="email"
                        name="email"
                        label="Email Address"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type='submit' onClick={handleSubmit}>
                        Update!
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )

}
        

export default UserUpdateForm