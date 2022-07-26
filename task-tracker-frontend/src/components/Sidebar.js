import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

export default function Sidebar() {
  return (
    <Paper sx={{ width: '10' }}>
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
    </Paper>
  );
}