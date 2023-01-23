import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Grid, Stack, Typography } from '@mui/material'
import ReviewCard from '../../components/ReviewCard'
import Footer from '../../components/Footer'
import LoggedOutNavbar from '../../components/LoggedOutNavbar'

const review1 = "I absolutely love this task tracking application! The ability to collaborate with others is a game changer for my team. The interface is user-friendly and intuitive, making it easy to assign tasks, set deadlines, and track progress. The real-time updates and notifications ensure that everyone is on the same page and no task falls through the cracks. The comments and file sharing feature also allows for seamless communication and collaboration among team members. Overall, this application has greatly improved our team's productivity and organization. I highly recommend it to any team looking for a reliable and efficient task tracking solution."
const review2 = "I am beyond impressed with this task tracking website! As a busy person, time management is key, and this application has been a lifesaver. Not only does it allow me to efficiently assign tasks and deadlines to my team, but it also gives me peace of mind knowing that everything is organized and on track.  The best part is that I am able to spend more quality time with my partner now that work is not consuming all of my time. I am so grateful for this application and the positive impact it has had on my personal and professional life."
const review3 = "Woof woof! I am just a dog but I can tell you that this task tracking website is pawsome! My human always used to be so busy with work and now that they started using this website, they have more free time to play fetch and take me for walks. I can tell that they are less stressed too, which makes me very happy. The website is very easy to use, and I can tell that it helps my human stay organized and on top of things. I like how the website keeps them updated and they can work with other humans to get things done. I am so glad that my human found this website, it has made a big difference in our lives. 5 paws up!"

function Homepage() {
  return (
    <>
        <LoggedOutNavbar />
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
                <ReviewCard review={review1} />
                <ReviewCard review={review2} />
                <ReviewCard review={review3} />
            </Grid>
        </Grid>
        <Divider />
        <Footer />
    </Stack>
  </>
  )
}

export default Homepage