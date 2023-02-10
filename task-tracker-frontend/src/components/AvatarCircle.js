import { Avatar, Box, Grid, ThemeProvider } from '@mui/material'
import React from 'react'

function AvatarCircle(props) {



    return (
    <Grid>
        <Avatar 
            display="inline-block"
            src={props.picture} 
            alt="Profile Circle" 
            sx={{ height: 24, width: 24}}
        />
    </Grid>
  )
}

export default AvatarCircle