import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, CircularProgress, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'

import { updateTask, reset, getTasks } from '../../features/tasks/taskSlice'
import ClippedDrawer from '../../components/ClippedDrawer'
import TaskUpdateForm from '../../components/TaskUpdateForm'


function EditTaskForm( {match} ) {

    const { taskId } = useParams()
    const { tasks, isLoading, isError, message } = useSelector((state) => state.tasks) 
    const { user } = useSelector((state) => state.auth)
    
    // console.log(tasks)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        if(isError) {
            console.log(message)
        }
      
        if(!user) {
            navigate('/')
          }

        dispatch(getTasks())
        
        return () => {
            dispatch(reset())
        }
        
        }, [])

    let Task;
    tasks?.map(task => {
        if(task._id === taskId) {
            Task = task
        }   
        return Task
    })
    console.log(Task)


    if(!Task) {
        return <CircularProgress />
    }

    if(isLoading) {
        return <CircularProgress />
      }

    return (
        <>  
            <Grid container>
                <Grid item>
                    <ClippedDrawer />
                </Grid>
                <Grid item style={{ marginLeft: "15%", marginTop: "5%"}}>
                    <TaskUpdateForm id={Task._id} titleProp={Task.title} descriptionProp={Task.description} priorityProp={Task.priority} statusProp={Task.status} />
                </Grid>
            </Grid>
        </>
  )
}

export default EditTaskForm