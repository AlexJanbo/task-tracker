import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material/'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function TaskTable() {

  
  const { tasks } = useSelector((state) => state.tasks) 

  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ minWidth: '5rem'}}>Title</TableCell>
            <TableCell sx={{ maxWidth: '5rem'}}>Description</TableCell>
            <TableCell sx={{ minWidth: '5rem'}}>Priority</TableCell>
            <TableCell sx={{ minWidth: '5rem'}}>Status</TableCell>
            <TableCell sx={{ minWidth: '5rem'}}>Created At</TableCell>
            <TableCell sx={{ minWidth: '5rem'}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow
              key={task._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{task.priority}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>{new Date(task.createdAt).toLocaleDateString('en-US')}</TableCell>
              <TableCell>
                <Button>
                  Edit
                </Button>
                <Link to={`/tasks/${task._id}/`}>
                  View
                </Link>
                {/* <Button onClick={() => dispatch(deleteTask(task._id))}>
                  Delete
                </Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}



export default TaskTable