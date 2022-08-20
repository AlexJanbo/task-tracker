import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import TaskIcon from '@mui/icons-material/Task';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const drawerWidth = 200;

const list = {
  dashboard: {
    text: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/dashboard'
    
  },
  groupProject: {
    text: 'Group Project',
    icon: <GroupIcon />,
    link: '/group-projects'
  },
  projects: {
    text: 'Projects',
    icon: <WorkIcon />,
    link: '/projects'
  },
  tasks: {
    text: "Tasks",
    icon: <TaskIcon />,
    link: '/tasks'
  }
}

console.log(list)

const list2 = {
  userProfile: {
    text: 'User Profile',
    icon: 'link',
    link: '/user-profile'
  },
  userSettings: {
    text: 'User Settings',
    icon: 'link',
    link: '/user-settings'
  }
}



export default function ClippedDrawer() {

  
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ bgcolor: '#292f4c', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar width="100%" style={{ paddingLeft: "0", paddingRight: "0" }}  variant="dense">
            <Typography marginLeft="15%" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={{ textDecoration: 'none' }} to='/dashboard' >
                Task Tracker
              </Link>
            </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <Link to={list.dashboard.link}>
              <ListItem key={list.dashboard.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {list.dashboard.icon}
                  </ListItemIcon>
                  <ListItemText primary={list.dashboard.text} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to={list.groupProject.link}>
              <ListItem key={list.groupProject.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {<GroupIcon />}
                  </ListItemIcon>
                  <ListItemText primary={list.groupProject.text} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to={list.projects.link}>
              <ListItem key={list.projects.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {<WorkIcon />}
                  </ListItemIcon>
                  <ListItemText primary={list.projects.text} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to={list.tasks.link}>
              <ListItem key={list.tasks.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {<TaskIcon />}
                  </ListItemIcon>
                  <ListItemText primary={list.tasks.text} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <Link to={list2.userProfile.link}>
              <ListItem key={list2.userProfile.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {<PersonIcon />}
                  </ListItemIcon>
                  <ListItemText primary={list2.userProfile.text} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to={list2.userSettings.link}>
              <ListItem key={list2.userSettings.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {<SettingsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={list2.userSettings.text} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}