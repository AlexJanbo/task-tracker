import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProjectMember } from '../features/projects/projectSlice'

function ProjectMembers(props) {

  
  const dispatch = useDispatch()
  
  const [ projectId, setProjectId ] = useState(props.id)
  const [ username, setUsername ] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProjectMember({ projectId, username }))
    window.location.reload()
  }

  return (
    <>  
        <Grid style={{ marginLeft: "15%", marginRight: "5%", marginTop: "2%", backgroundColor: "orange", height: "4rem", border: "1px solid black", borderRadius: "1rem" }}>
            <Typography variant="h3" style={{paddingTop: ".2rem", color: "black", textAlign: "center"}}>Project Members</Typography>
            <Grid container >
              <Grid item>
                  <TextField
                    id="username"
                    name="username"
                    label="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
              </Grid>
              <Button type="submit" onClick={handleSubmit}>Add New Member!</Button>
            </Grid>
        </Grid>
    </>
  )
}

export default ProjectMembers