import { CircularProgress, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ClippedDrawer from '../../components/ClippedDrawer'
import SingleProjectCard from '../../components/SingleProjectCard'
import { getProjects, reset } from '../../features/projects/projectSlice'

function SingleProject({ match }) {

    const { projectId } = useParams()
    const { projects, isLoading, isError, message } = useSelector((state) => state.projects)
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
    
        dispatch(getProjects())
    
    
        return () => {
          dispatch(reset())
        }
      }, [user, navigate, isError, message, dispatch])

      if(isLoading) {
        return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
      }

        let Project;
        projects?.map(project => {
        if(project._id === projectId) {
            Project = project
        }
        return Project
        })
        // console.log(Project)


    if(!projects) {
        return (
            <Grid>
                <h2>Project not found!</h2>
            </Grid>
        )
    }

    return (
        <>
            <ClippedDrawer />
            <SingleProjectCard id={Project._id} title={Project.title} description={Project.description}/>
        </>
    )
}

export default SingleProject