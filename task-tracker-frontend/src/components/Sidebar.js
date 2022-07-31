import { Grid, ListItemText, MenuItem, MenuList, Typography } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Grid p={2} width='250px' textAlign='center' role='presentation'>
        <Typography variant='h6' component='div'>
            Side Panel
        </Typography>
        <MenuList>
            <MenuItem>
            <ListItemText inset>Dashboard Home</ListItemText>
            </MenuItem>
            <MenuItem>
            <ListItemText inset>My Group Projects</ListItemText>
            </MenuItem>
            <MenuItem>
            <ListItemText inset>My Projects</ListItemText>
            </MenuItem>
            <MenuItem>
            <ListItemText inset>My Tasks</ListItemText>
            </MenuItem>
            <MenuItem>
            <ListItemText inset>User Profile</ListItemText>
            </MenuItem>
        </MenuList>
    </Grid>
  )
}

export default Sidebar