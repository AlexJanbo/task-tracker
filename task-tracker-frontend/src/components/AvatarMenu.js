import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AvatarCircle from './AvatarCircle';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { Button } from '@mui/material';

export default function AvatarMenu(props) {
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user } = useSelector((state) => state.auth)
    // console.log(user)
  
    const onLogout = () => {
      dispatch(logout())
      dispatch(reset)
      navigate('/')
    }
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
            <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <AvatarCircle picture={props.picture}/>
            </IconButton>
            </Tooltip>
        </Box>
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
            elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
                },
                '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={handleClose}>
            <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <Settings fontSize="small" />
            </ListItemIcon>
            Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
            {/* <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon> */}
            <Button color="error" onClick={onLogout}>
                Logout
            </Button> 
            </MenuItem>
        </Menu>
        </>
    );
}