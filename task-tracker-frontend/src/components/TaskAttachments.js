import { Grid, Typography } from '@mui/material'
import React from 'react'

function TaskAttachments() {
  return (
    <>  
        <Grid style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", backgroundColor: "orange", height: "4rem", border: "1px solid black", borderRadius: "1rem" }}>
            <Typography variant="h3" style={{paddingTop: ".2rem", color: "black", textAlign: "center"}}>Task Attachments:</Typography>
        </Grid>
    </>
  )
}

export default TaskAttachments