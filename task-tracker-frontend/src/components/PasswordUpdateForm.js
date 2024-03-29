import { Button, Grid, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changePassword, reset } from '../features/auth/authSlice'

function PasswordUpdateForm() {

    const theme = useTheme()

    const { user } = useSelector(state => state.auth)
    console.log(user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ currentPassword, setCurrentPassword ] = useState('')
    const [ newPassword, setNewPassword ] = useState('')
    const [ confirmNewPassword, setConfirmNewPassword ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
 
        if(newPassword === confirmNewPassword) {

            dispatch(changePassword({ currentPassword, newPassword, confirmNewPassword }))
            dispatch(reset())
            window.location.reload()
            navigate('/user-profile/')
        }
        else {
            console.log("Passwords do not match!")
        }
    }
    

  return (
    <Grid container spacing={3} sx={{ display: 'flex', flexDirection: 'column', width:"400px", justifyContent: 'center', marginTop: "5%", marginLeft: "5%"}}>
            <Grid item style={{ width: "350px", zIndex: "1", backgroundColor: theme.palette.primary.main, border: "1px solid black", borderRadius: "1rem"}}>
                <Typography variant="h5" style={{ textAlign: "center", marginBottom: "4%", color: theme.palette.text.primary}}>Change Password</Typography>
            </Grid>
            <Grid container spacing={3} sx={{backgroundColor: "white", zIndex: "0", display: 'flex', flexDirection: 'column', paddingTop: "1rem", width:"400px", alignItems: 'center', border: "1px solid black"}}>
                <Grid item>
                    <TextField
                    autoComplete="off"
                    id="currentPassword"
                    name="currentPassword"
                    label="Current Password"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                    id="newPassword"
                    name="newPassword"
                    label="New Password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    label="Confirm New Password"
                    type="password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                </Grid>
                <Button  type='submit' onClick={handleSubmit} >
                    Change!
                </Button>
            </Grid>
    </Grid>
  )
}

export default PasswordUpdateForm