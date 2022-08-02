import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'

function SingleTaskCard({ id, title, description, priority, status }) {
  return (
    <Grid sx={{ display: 'flex', flexDirection: 'column', width: '35%', height: "60%", marginLeft: '15%', marginTop: '10%', border: '.2rem solid black', borderRadius: '.5rem'}}>
        <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '4rem', color: 'black', bgcolor: "orange", borderBottom: '.2rem solid black'}}>
            <Typography textAlign='center' variant='h5'>Details for ticket: {title}</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', alignItems: 'flex-end', height: '3rem', alignContent:"center"}}>
            <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Ticket Title</Typography>
            <Typography variant='h8' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Ticket Description</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'row', flexGrow: 2, justifyContent: 'space-between', height: '5rem', alignItems:"center", flexWrap: 'wrap'}}>
            <Typography variant='h7' width="50%" textAlign="center">{title}</Typography>
            <Typography variant='h7' width="50%" textAlign="center">{description}</Typography>
        </Grid>
        <Divider />
        <Grid sx={{ display: 'flex', height: '4rem', justifyContent: 'flex-start', alignItems:"center"}}>
            <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Ticket Priority</Typography>
            <Typography variant='h7' width="50%" textAlign="center" fontStyle="italic" fontWeight="bold" sx={{textDecoration:'underline'}}>Ticket Status</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', height: '4rem', alignItems:"center"}}>
            <Typography variant='h7' width="50%" textAlign="center">{priority}</Typography>
            <Typography variant='h7' width="50%" textAlign="center">{status}</Typography>
        </Grid>
    </Grid>
  )
}

export default SingleTaskCard