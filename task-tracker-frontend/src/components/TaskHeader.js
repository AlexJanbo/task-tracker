import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material'

function TaskHeader() {

  const theme = useTheme()

  return (
    <>  
        <Grid style={{ marginLeft: "5%", marginRight: "5%", marginTop: "7%", backgroundColor: theme.palette.secondary.main , height: "4rem", border: "1px solid black", borderRadius: "1rem" }}>
            <Typography variant="h4" style={{marginRight: "35%", color: theme.palette.text.secondary , textAlign: "center", alignItems: 'center'}}>My Tasks!</Typography>
        </Grid>
    </>
  )
}

export default TaskHeader