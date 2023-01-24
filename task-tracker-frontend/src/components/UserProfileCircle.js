import { Box, Grid, ThemeProvider } from '@mui/material'
import React from 'react'

function UserProfileCircle(props) {



    return (
    <Grid>
        <img 
            display="inline-block"
            src={props.picture} 
            alt="Profile Circle" 
            height="24px"
            width="100%"
        />
    </Grid>
  )
}

export default UserProfileCircle