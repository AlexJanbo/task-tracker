import { Grid, Typography } from '@mui/material'
import React from 'react'

function TaskHeader() {
  return (
    <>  
        <Grid style={{ marginLeft: "5%", marginRight: "5%", marginTop: "7%", backgroundColor: "orange", height: "4rem", border: "2px solid black", borderRadius: "1rem" }}>
            <Typography variant="h3" style={{marginRight: "35%", paddingTop: ".2rem", color: "black", textAlign: "center"}}>My Tasks!</Typography>
        </Grid>
    </>
  )
}

export default TaskHeader