import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import ProjectForm from './ProjectForm';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Fab, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import { createProject } from '../features/projects/projectSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ProjectFormModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')


  const dispatch = useDispatch()

  const handleSubmit = (e) => {
      e.preventDefault()

      dispatch(createProject({ title, description }))
      setTitle('')
      setDescription('')
  }

  return (
    <Box sx={{ display: { md: "block", lg: "none", position: "absolute", right: "-10px", bottom: 0  }}}>

        <Button onClick={handleOpen}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid container sx={{display: 'flex', flexDirection: 'column'}}>
                    <Grid item style={{ zIndex: "1", backgroundColor: "orange", border: "2px solid black", borderRadius: "1rem"}}>
                        <Typography variant="h4" style={{ textAlign: "center", marginBottom: "5%", marginTop: "5%"}}>Create a New Project!</Typography>
                    </Grid>
                    <Grid container sx={{ backgroundColor: "white", zIndex: "0", display: 'flex', flexDirection: 'column', paddingTop: "1rem", width:"400px", alignItems: 'center'}}>
                    <Grid item>
                        <TextField
                            id="title"
                            name="title"
                            label="Title"
                            type="text"
                            multiline 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="description"
                            name="description"
                            label="Description"
                            type="text"
                            multiline
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Grid>

                    <Button  type='submit' onClick={handleSubmit}>
                        Create Project
                    </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    </Box>
  );
}