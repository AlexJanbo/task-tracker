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
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Grid, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';


const drawerWidth = 200;

const list = {
  dashboard: {
    text: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/dashboard'
    
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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function ClippedDrawer() {

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ bgcolor: '#292f4c', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar style={{ paddingLeft: "0", paddingRight: "0" }}  variant="dense">
          <Typography marginLeft="15%" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: 'none' }} to='/dashboard' >
              Task Tracker
            </Link>
          </Typography>
          <Grid marginRight="15%" sx={{display: "flex"}}>
            <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 1,
          [`& .MuiDrawer-paper`]: { boxSizing: 'border-box' },
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