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
import TaskIcon from '@mui/icons-material/Task';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { styled, alpha, useTheme, Theme, CSSObject } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Grid, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';


const list = {
    dashboard: {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      link: '/dashboard'
      
    },
    manageRoles: {
      text: 'Manage Roles',
      icon: <GroupAddIcon />,
      link: '/manage-roles'

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
  
  const list2 = {
    userProfile: {
      text: 'User Profile',
      icon: 'link',
      link: '/user-profile'
    },
  }


  export default function SideDrawer() {

    const { user } = useSelector((state) => state.auth)
    // console.log(user)

    const theme = useTheme()

    return (
      <>
        <Box flex={1} p={2}  sx={{ display: { xs: "block" }}}>
          <Drawer
            variant="permanent"
            sx={{
              flexShrink: 1,
              flexGrow: 1,
              [`& .MuiDrawer-paper`]: { boxSizing: 'border-box' },
            }}
          >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}   >
            <List>
              <Link to={list.dashboard.link} style={{ textDecoration: 'none' }}>
                <ListItem key={list.dashboard.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ display: {md: "none", lg: "block"}}}>
                      {list.dashboard.icon}
                    </ListItemIcon>
                    <Typography color={theme.palette.text.secondary}>
                      {list.dashboard.text}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
              {user.role === "Admin" && (
                <Link to={list.manageRoles.link} style={{ textDecoration: 'none' }}>
                <ListItem key={list.manageRoles.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ display: {md: "none", lg: "block"}}}>
                      {list.manageRoles.icon}
                    </ListItemIcon>
                    <Typography color={theme.palette.text.secondary}>
                      {list.manageRoles.text}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
              )}
              <Link to={list.projects.link} style={{ textDecoration: 'none' }}>
                <ListItem key={list.projects.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ display: {md: "none", lg: "block"}}}>
                      {list.projects.icon}
                    </ListItemIcon>
                    <Typography color={theme.palette.text.secondary}>
                      {list.projects.text}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to={list.tasks.link} style={{ textDecoration: 'none' }}>
                <ListItem key={list.tasks.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ display: {md: "none", lg: "block"}}}>
                      {<TaskIcon />}
                    </ListItemIcon>
                    <Typography color={theme.palette.text.secondary}>
                      {list.tasks.text}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <Link to={list2.userProfile.link} style={{ textDecoration: 'none' }}>
                <ListItem key={list2.userProfile.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ display: {md: "none", lg: "block"}}}>
                      {<PersonIcon />}
                    </ListItemIcon>
                    <Typography color={theme.palette.text.secondary}>
                      {list2.userProfile.text}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Box>
          </Drawer>
        </Box>
      </>
    )
  }