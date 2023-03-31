import { Button, Grid, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createComment, reset } from '../features/comments/commentSlice' 

function CommentForm({ id }) {

    const theme = useTheme()
    const { user } = useSelector((state) => state.auth)
  
    const [ description, setDescription ] = useState('')
    const [ image, setImage ] = useState('')

    const dispatch = useDispatch()

    const handleImage = (e) => {
        const file = e.target.files[0]
        // console.log("Type: " + file.type + " Size: " + file.size)
        
        const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/pdf']
        if(allowedFileTypes.includes(file.type) && (file.size < 5000000)) {
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

        dispatch(createComment({id, description, image}))
        dispatch(reset())
        window.location.reload()
    }
  
    return (
        <Grid container spacing={3} sx={{ marginLeft: "15%", marginTop: "15%", display: 'flex',  maxWidth:"400px", justifyContent: 'start', alignContent: "center"}}>
            <Grid item style={{ width: "350px", zIndex: "1", backgroundColor: theme.palette.primary.main, border: "1px solid black", borderRadius: "1rem"}}>
                <Typography variant="h4" style={{ color: theme.palette.text.primary, textAlign: "center", marginBottom: "4%"}}>Add Comment!</Typography>
            </Grid>
            <Grid container spacing={3} sx={{ zIndex: "0", display: 'flex', flexDirection: 'column', paddingTop: "1rem", width:"400px", alignItems: 'center', border: "1px solid black"}}>
                <Grid item p={2}>
                    <TextField
                        id="description"
                        name="description"
                        label="Description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Grid>
                <label for="input">Attach an image</label>
                <input onChange={handleImage} type="file" id="ImageUpload" name="image" label="Image"/>
                <Button variant="contained" type='submit' onClick={handleSubmit}>
                    Add
                </Button>
            </Grid>
        </Grid>
    )
}

export default CommentForm