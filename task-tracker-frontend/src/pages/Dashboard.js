import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import TaskForm from '../components/TaskForm'


function Dashboard() {

  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if(!user) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <>
      <section>
        <h1>Welcome { user && user.name }</h1>
        <p>Task Dashboard</p>
      </section>
      <TaskForm />
    </>
  )
}

export default Dashboard