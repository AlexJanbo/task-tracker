import { Grid } from '@mui/material'
import React from 'react'
import ClippedDrawer from '../../components/ClippedDrawer'
import PasswordUpdateForm from '../../components/PasswordUpdateForm'

function ChangePassword() {
  return (
    <>
        <Grid container>
            <Grid item>
                <ClippedDrawer />
            </Grid>
            <Grid item style={{ marginLeft: "15%", marginTop: "5%"}}>
                <PasswordUpdateForm />
            </Grid>
        </Grid>
    </>
  )
}

export default ChangePassword