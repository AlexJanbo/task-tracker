import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'

function TaskTable() {

  const dispatch = useDispatch()
  
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
            <TableCell sx={{ minWidth: '5rem'}}>Edit/delete</TableCell>
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
              <TableCell><button onClick={() => dispatch(deleteTask(task._id))}>X</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}



export default TaskTable