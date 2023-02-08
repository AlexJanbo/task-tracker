import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfilePicture, reset } from '../features/auth/authSlice'
import UserProfilePictureModal from './UserProfilePictureModal'

function UserProfilePicture() {

  const { user } = useSelector((state) => state.auth)
  console.log(user)

  const [ image, setImage ] = useState('')

  const dispatch = useDispatch()

  const handleImage = (e) => {
      const file = e.target.files[0]
      // console.log("Type: " + file.type + " Size: " + file.size)
      
      const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/pdf']
      if(allowedFileTypes.includes(file.type) && (file.size < 5 * 1024 * 1024)) {
          setFileToBase(file)
      } else {
          throw new Error ("Invalid file type. Only jpeg, jpg, png, pdf allowed.")
      }
  }

  const setFileToBase = (file) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
          setImage(reader.result)
      }
  }

  // console.log(id)
  const handleSubmit = (e) => {
      e.preventDefault()

      dispatch(changeProfilePicture({ image }))
      dispatch(reset())
  }


  return (
    <>
        <Box sx={{}}>
            <Grid sx={{ height: "25%", width: "25%", marginTop: "4rem", marginLeft: "0px"}} >
                <img src={user.image} alt="Profile" display="block" width="400px" height="400px" />
                <input onChange={handleImage} type="file" id="ImageUpload" name="image" label="Image"/>
                <Button variant="contained" type='submit' onClick={handleSubmit}>
                    Add
                </Button>

                <UserProfilePictureModal />

            </Grid>
        </Box>
    </>
  )
}

export default UserProfilePicture