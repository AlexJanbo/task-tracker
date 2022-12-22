import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function UserProfileImage() {
  return (
    <>
        <Box sx={{backgroundColor: "black"}}>
            <Grid sx={{ height: "25%", width: "25%", backgroundColor: "black"}} >
                <Typography> Sup yall</Typography>
            </Grid>
        </Box>
    </>
  )
}

export default UserProfileImage