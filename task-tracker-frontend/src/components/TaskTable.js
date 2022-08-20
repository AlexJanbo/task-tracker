import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material/'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import TablePagination from '@mui/material/TablePagination';

function TaskTable() {

  
  const { tasks } = useSelector((state) => state.tasks) 
  // console.log(tasks)

  const taskArray = Array.from(tasks)
  // console.log(taskArray)
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, tasks.length - page * rowsPerPage)

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
          {taskArray
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((task, index) => (
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
                <Link to={`/editTask/${task._id}/`}>
                  <Button>
                    Edit
                  </Button>
                </Link>
                <Link to={`/tasks/${task._id}/`}>
                  <Button>
                    View
                  </Button>
                </Link>
                {/* <Button onClick={() => dispatch(deleteTask(task._id))}>
                  Delete
                </Button> */}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow>
              <TableCell />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination 
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tasks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>

  )
}



export default TaskTable