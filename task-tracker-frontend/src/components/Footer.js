import { Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Grid sx={{
        height: '5rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        bgcolor: '#f8f9fa'
        // borderTop: '1px dashed black'
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