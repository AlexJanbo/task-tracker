import { Button, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeRole, reset } from '../features/auth/authSlice'

export default function UpdateRolesMenu(props) {

    const [ role, setRole ] = useState(props.user.role)

    const id = props.user._id

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(changeRole({id, role}))
        dispatch(reset())
        window.location.reload()

    }

    return (
    <>
        <Grid item>
            <InputLabel id="role-select-label"></InputLabel>
            <Select
                labelId="role-select-label"
                id="role-simple-select"
                value={role}
                label="Role"
                onChange={(e) => setRole(e.target.value)}
            >
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="Developer">Developer</MenuItem>
            </Select>
        </Grid>
        <Button type='submit' onClick={handleSubmit} >
            Change
        </Button>
    </>
  )
}
