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
    <>
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow sx={{height: "2.5rem"}}>
              <TableCell sx={{ width: "20%"}}>Title</TableCell>
              <TableCell sx={{ width: "60%"}}>Description</TableCell>
              <TableCell sx={{ width: "5%"}}>Priority</TableCell>
              <TableCell sx={{ width: "5%"}}>Status</TableCell>
              <TableCell sx={{ width: "5%"}}>Created At</TableCell>
              <TableCell sx={{ width: "5%"}}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {taskArray
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((task, index) => (
              <TableRow
                key={task._id}
                sx={{ height: "4.5rem", '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{task.title}</TableCell>
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "50%", paddingBottom: '0', paddingTop: "0"}}>{task.description}</TableCell>
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{task.priority}</TableCell>
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{task.status}</TableCell>
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{new Date(task.createdAt).toLocaleDateString('en-US')}</TableCell>
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>
                  {/* <Link to={`/editTask/${task._id}/`}>
                    <Button>
                      Edit
                    </Button>
                  </Link> */}
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
              <TableRow style={{ height: 72 * emptyRows}}>
                <TableCell colSpan={6}></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination 
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tasks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}



export default TaskTable