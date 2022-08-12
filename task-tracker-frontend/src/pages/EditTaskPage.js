import { Box } from '@mui/material'
import React from 'react'
import ClippedDrawer from '../components/ClippedDrawer'
import EditTaskForm from '../components/EditTaskForm'

function EditTaskPage() {
  return (
    <>
        <Box container sx={{ display: 'flex', flexDirection:'row', justifyContent:"flex-start"}}>
            <ClippedDrawer />
            <EditTaskForm />
        </Box>
    </>
  )
}

export default EditTaskPage