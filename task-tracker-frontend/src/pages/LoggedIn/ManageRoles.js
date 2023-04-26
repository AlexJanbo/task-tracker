import { Box, CircularProgress, Stack, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'
import ManageRolesTable from '../../components/ManageRolesTable'
import { getAllUsers, reset } from '../../features/auth/authSlice'

function ManageRoles() {

  const theme = useTheme()
  
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const auth = useSelector(state => state.auth)
    const { isLoading, isError, message } = useSelector((state) => state.auth)
    const  [ users, setUsers ] = useState([])


    useEffect(() => {

        if(isError) {
          console.log(message)
        }
    
        const fetchData = async () => {
            const data = await dispatch(getAllUsers());
            setUsers(data);
         }

        fetchData()
        .catch(console.error)

        
    }, [])

    let allUsersArray = []

    if(users.payload) {
      allUsersArray = Array.from(users.payload)
      console.log(allUsersArray)
    }

    if(isLoading) {
      return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
    }


    return (
    <>
      <LoggedInNavbar />
      <Box container bgcolor={theme.palette.background.default} height={"100vh"}>
        <Stack direction="row" spacing={4} margin={5} justifyContent="space-between" >
          <SideDrawer />
          <ManageRolesTable users={allUsersArray}/>
        </Stack>
      </Box>
    </>
  )
}

export default ManageRoles