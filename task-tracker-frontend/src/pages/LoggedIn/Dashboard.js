import React from 'react'
import { Button, Divider, Grid, Typography} from '@mui/material'
import ClippedDrawer from '../../components/ClippedDrawer'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Dashboard() {

  const { user } = useSelector((state) => state.auth)
  const { tasks } = useSelector((state) => state.tasks)

  const highTask = tasks.filter((task) => {
    return task.priority === "High"
  })
  console.log(highTask)

  return(
    <>
      <ClippedDrawer />
      <Grid sx={{ display: 'flex', flexDirection: 'column', width: '35%', height: "60%", marginLeft: '25%', marginTop: '10%', border: '.2rem solid black', borderRadius: '.5rem'}}>
      <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '4rem', color: 'black', bgcolor: "orange", borderBottom: '.2rem solid black'}}>
          <section sx={{ marginLeft: '40rem'}}>
                  <h1>Welcome {user && user.username}</h1>
          </section>
          <Typography textAlign='center' variant='h5'>Dashboard</Typography>
      </Grid>
      <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: 'flex-end', height: '3rem', alignContent:"center"}}>
          <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Current High Priority Tasks</Typography>
          <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>New Tasks Assigned to Me</Typography>
      </Grid>
      <Grid sx={{ display: 'flex', flexDirection: 'row', flexGrow: 2, justifyContent: 'space-between', height: '5rem', alignItems:"center", flexWrap: 'wrap'}}>
            <Typography variant='h7' width="50%" textAlign="center">
                {highTask[0] && highTask[0]}
                    {/* // <Link to={`/tasks/${highTask[0]?._id}/`}>
                    //     <Button>
                    //     View
                    //     </Button>
                    // </Link>: */}
            </Typography>
          <Typography variant='h7' width="50%" textAlign="center"></Typography>
      </Grid>
      <Divider />
      <Grid sx={{ display: 'flex', height: '4rem', justifyContent: 'flex-start', alignItems:"center"}}>
          <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Recent Changes to Tasks</Typography>
          <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Tasks Completed This Week by Priority</Typography>
      </Grid>
      <Grid sx={{ display: 'flex', height: '4rem', alignItems:"center"}}>
          <Typography variant='h7' width="50%" textAlign="center"></Typography>
          <Typography variant='h7' width="50%" textAlign="center"></Typography>
      </Grid>
      </Grid>
  </>
  )
}

export default Dashboard