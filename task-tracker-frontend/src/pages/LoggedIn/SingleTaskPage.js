import { CircularProgress, Grid } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ClippedDrawer from '../../components/ClippedDrawer'
import SingleTaskCard from '../../components/SingleTaskCard'
import { getTasks, reset } from '../../features/tasks/taskSlice'

export const SingleTaskPage = ({ match }) => {

    const { taskId } = useParams()
    const { tasks, isLoading, isError, message } = useSelector((state) => state.tasks) 
    const { user } = useSelector((state) => state.auth)

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

    if(isLoading) {
        return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
      }



    let Task;
    tasks?.map(task => {
        if(task._id === taskId) {
            Task = task
        }   
        return Task
    })
    console.log(Task)


    if(!Task) {
        return (
            <Grid>
                <h2>Task not found!</h2>
            </Grid>
        )
    }

    return (
        <>  
                <ClippedDrawer />
                <SingleTaskCard id={Task._id} title={Task.title} description={Task.description} priority={Task.priority} status={Task.status} />
        </>
    )
}