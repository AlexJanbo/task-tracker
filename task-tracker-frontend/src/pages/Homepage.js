import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function Homepage() {
  return (
    <>
      <Stack direction="column">
        <Grid sx={{
            width: '100%',
            height: '37.5rem',
            bgcolor: 'white',
            display: 'flex',
            flexDirection: 'row',
            }}
        >
            <Grid sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginLeft: '15%',
                paddingRight: '5%'                
            }}>
                <Typography variant="h3"> Big Caption, </Typography>
                <Typography variant="h3">Split Into Two</Typography>
                <Typography> Many words to describe something Awesomely  Many words to describe something Awesomely  Many words to describe something Awesomely
                </Typography>
            </Grid>
            <Grid sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'flex-Start'
            }}>
                <Typography variant="h1"> It Me</Typography>
            </Grid>

        </Grid>
        <Grid sx={{
            height:"6.25rem",
            bgcolor:"white",
            borderRadius:"5px",
        }}
        >
        </Grid>
        <Grid
            height="400px"
            bgcolor="#f8f9fa"
        >
        </Grid>
        <Grid
            height="400px"
            bgcolor="white"
        >
        </Grid>
        <Grid
            height="400px"
            bgcolor="#f8f9fa"
        >
        </Grid>
    </Stack>
  </>
  )
}

export default Homepage