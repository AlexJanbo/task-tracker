import { Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function DashboardPanel(props) {

  let urgentTasksArray = [...props.urgentTasks]
  console.log(urgentTasksArray)

  return (
    <>
        <Grid sx={{ display: 'flex', flexDirection: 'column', width: '35%', height: "60%", marginLeft: '25%', marginTop: '10%', border: '.2rem solid black', borderRadius: '.5rem'}}>
        <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '4rem', color: 'black', bgcolor: "orange", borderBottom: '.2rem solid black'}}>
            <Typography textAlign='center' variant='h5'>Dashboard</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: 'flex-end', height: '3rem', alignContent:"center"}}>
            <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Urgent Tasks</Typography>
            <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>New Tasks Assigned to Me</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'row', flexGrow: 2, justifyContent: 'space-between', height: '5rem', alignItems:"center", flexWrap: 'wrap'}}>
                <Typography variant='h7' width="50%" textAlign="center">
                    {urgentTasksArray[0] && urgentTasksArray[0].title}
                    {urgentTasksArray[0] && <Link to={`/tasks/${urgentTasksArray[0]._id}/`} style={{ textDecoration: "none"}}>
                      <Button>
                        View
                      </Button>
                    </Link>} 
                    {urgentTasksArray[1] && urgentTasksArray[1].title} 
                    {urgentTasksArray[1] && <Link to={`/tasks/${urgentTasksArray[1]._id}/`} style={{ textDecoration: "none"}}>
                      <Button>
                        View
                      </Button>
                    </Link>}
                </Typography>
            <Typography variant='h7' width="50%" textAlign="center"></Typography>
        </Grid>
        <Divider />
        <Grid sx={{ display: 'flex', height: '4rem', justifyContent: 'flex-start', alignItems:"center"}}>
            <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Recent Changes to Tasks</Typography>
            <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Select today's task from list?</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', height: '4rem', alignItems:"center"}}>
            <Typography variant='h7' width="50%" textAlign="center"></Typography>
            <Typography variant='h7' width="50%" textAlign="center"></Typography>
        </Grid>
        </Grid>
    </>
  )
}

export default DashboardPanel