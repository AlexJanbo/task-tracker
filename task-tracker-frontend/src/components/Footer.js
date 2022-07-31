import { Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Grid sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderTop: '1px dashed black'
        }}
    >
        <Grid sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
            }}
        >
            <Typography>alexjanbo/tasktracker</Typography>
            <Typography>Copyright © TaskTracker 2022. All rights reserved.</Typography>
        </Grid>
    </Grid>
  )
}

export default Footer