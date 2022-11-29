import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { Button, Divider, Grid, Stack, Typography } from '@mui/material'
import ReviewCard from '../../components/ReviewCard'
import Footer from '../../components/Footer'

function Homepage() {
  return (
    <>
        <Navbar />
        <Stack direction="column">


        {/* First Box */}
        <Grid sx={{
            width: '100%',
            height: '37.5rem',
            bgcolor: 'white',
            display: 'flex',
            flexDirection: 'row',
            }}
        >
            {/* Left Side of First Box */}
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
                <Typography> Many words to describe something Awesomely  Many words to describe something Awesomely  Many words to describe something Awesomely</Typography>
                <Button variant="contained">
                  <Link to='/signup'>
                    Try for Free!
                  </Link>
                </Button>
            </Grid>

            {/* Right Side of First Box */}
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


        {/* Small Box */}
        <Grid sx={{
            height:"6.25rem",
            bgcolor:"blue",
            borderRadius:"5px",
            
        }}
        >
        </Grid>


        {/* Second Box */}
        <Grid sx={{
            width: '100%',
            height: '25rem',
            bgcolor: "#f8f9fa",
            display: 'flex',
            flexDirection: 'row',
        }}
        >
            {/* Left Side of Second Box */}
            <Grid sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'flex-Start',
                marginLeft: "15%"
            }}>
                <Typography variant="h1">Sup Yall It Me</Typography>
            </Grid>
            
            {/* Right Side of Second Box */}
            <Grid sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'flex-start',
             
            }}>
                <Typography variant="h3"> Big Caption, </Typography>
                <Typography variant="h3">Split Into Two</Typography>
                <Typography> Many words to describe something Awesomely  Many words to describe something Awesomely  Many words to describe something Awesomely
                </Typography>
            </Grid>
        </Grid>


        <Grid sx={{
            width: '100%',
            height: '25rem',
            bgcolor: "white",
            display: 'flex',
            flexDirection: 'row',
        }}
        >
        </Grid>

        <Grid sx={{
            width: '100%',
            height: '25rem',
            bgcolor: "#f8f9fa",
            display: 'flex',
            flexDirection: 'row',
        }}
        >
        </Grid>

        <Grid sx={{
            height: "31.25rem",
            bgcolor: "white",
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
            }}
        >
            <Typography variant='h3' sx={{ marginBottom: "3rem"}}>
                Join the millions of lizards using Task Tracker now!
            </Typography>

            <Grid sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </Grid>
        </Grid>
        <Divider />
        <Footer />
    </Stack>
  </>
  )
}

export default Homepage