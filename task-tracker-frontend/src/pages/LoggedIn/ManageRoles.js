import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import SideDrawer from '../../components/SideDrawer'
import ManageRolesTable from '../../components/ManageRolesTable'
import { getAllUsers, reset } from '../../features/auth/authSlice'

function ManageRoles() {
  
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const auth = useSelector(state => state.auth)
    const  [ users, setUsers ] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const data = await dispatch(getAllUsers());
            setUsers(data);
         }
        
        // if(!response.ok) {
        //     throw new Error(response.statusText)
        // }
        // const data = JSON.parse(response)
        // setUsers(data)

        fetchData()
        .catch(console.error)
        
    }, [])

    const allUsersArray = Array.from(users.payload)
    console.log(allUsersArray)





    
  
    
  
    return (
    <>
      <LoggedInNavbar />
      <Box container bgcolor={"#fafafa"} sx={{ flex: 1}}>
        <Stack direction="row" spacing={4} justifyContent="space-between" >
          <SideDrawer />
          <ManageRolesTable users={allUsersArray}/>
        </Stack>
      </Box>
    </>
  )
}

export default ManageRoles