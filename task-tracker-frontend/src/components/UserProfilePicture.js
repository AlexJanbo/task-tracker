import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import UserProfilePictureModal from './UserProfilePictureModal'

function UserProfilePicture() {
  return (
    <>
        <Box sx={{}}>
            <Grid sx={{ height: "25%", width: "25%", marginTop: "4rem"}} >
                <Typography> Sup yall</Typography>
                <UserProfilePictureModal />

            </Grid>
        </Box>
    </>
  )
}

export default UserProfilePicture