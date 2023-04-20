import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Checkbox, Typography } from '@mui/material/'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import TablePagination from '@mui/material/TablePagination';
import { Box } from '@mui/system';
import TaskHeader from './TaskHeader';
import { useTheme } from '@mui/material'
import CheckBoxIcon from '@mui/icons-material/CheckBox';


function TaskTable() {

  const theme = useTheme()
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
      <Box flex={5} p={1} m={2} style={{ marginTop: "5%" }} sx={{ display: {lg: "block" } }}>
        <TableContainer component={Paper} style={{ backgroundColor: theme.palette.background.default}}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{height: "2.5rem", backgroundColor: theme.palette.primary.main }}>
                <TableCell sx={{color: theme.palette.text.primary, fontWeight: "bold", fontSize: "20px"}}>Task Title</TableCell>
                <TableCell sx={{color: theme.palette.text.primary, fontWeight: "bold", fontSize: "20px"}}>Description</TableCell>
                <TableCell sx={{color: theme.palette.text.primary, fontWeight: "bold", fontSize: "20px"}}>Type</TableCell>
                <TableCell sx={{color: theme.palette.text.primary, fontWeight: "bold", fontSize: "20px"}} key="priority">
                  Priority
                  {/* <TableSortLabel
                    active={"priority" === "priority"}
                    direction="asc"
                    // onClick={createSortHandler("priority")}
                  >
                  </TableSortLabel> */}
                </TableCell>
                <TableCell sx={{color: theme.palette.text.primary, fontWeight: "bold", fontSize: "20px"}} key="status">
                  Status
                  {/* <TableSortLabel
                    active={"status" === "status"}
                    direction="desc"
                    // onClick={createSortHandler("status")}
                  >
                  </TableSortLabel> */}
                </TableCell>
                <TableCell sx={{color: theme.palette.text.primary, fontWeight: "bold", fontSize: "20px"}}>Deadline</TableCell>
                <TableCell sx={{color: theme.palette.text.primary, fontWeight: "bold", fontSize: "20px"}} key="created">
                  Created
                  {/* <TableSortLabel
                    active={true}
                  >
                  </TableSortLabel> */}
                </TableCell>
                <TableCell sx={{}}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{backgroundColor: "white"}}>
              {taskArray
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((task, index) => (
                <TableRow
                  key={task._id}
                  
                  sx={{ height: "4.5rem", '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell sx={{paddingleft: "3", paddingRight: "3", paddingBottom: '0', paddingTop: "0"}}>{task.title}</TableCell>
                  <TableCell sx={{paddingleft: "3", paddingRight: "3", paddingBottom: '0', paddingTop: "0"}}>{task.description}</TableCell>
                  <TableCell sx={{paddingleft: "3", paddingRight: "3", paddingBottom: '0', paddingTop: "0"}}>{task.type}</TableCell>
                  <TableCell sx={{paddingleft: "3", paddingRight: "3", paddingBottom: '0', paddingTop: "0"}}>{task.priority}</TableCell>
                  <TableCell sx={{paddingleft: "3", paddingRight: "3", paddingBottom: '0', paddingTop: "0"}}>{task.status == "Completed" ? <CheckBoxIcon color="success" /> : <Typography>{task.status}</Typography>}</TableCell>
                  <TableCell sx={{paddingleft: "3", paddingRight: "3", paddingBottom: '0', paddingTop: "0"}}>{task.deadline ? new Date(task.deadline).toLocaleDateString('en-US') : "No deadline"}</TableCell>
                  <TableCell sx={{paddingleft: "3", paddingRight: "3", paddingBottom: '0', paddingTop: "0"}}>{new Date(task.createdAt).toLocaleDateString('en-US')}</TableCell>
                  
                  <TableCell sx={{paddingleft: "3", paddingRight: "3", paddingBottom: '0', paddingTop: "0"}}>
                    {/* <Link to={`/editTask/${task._id}/`}>
                      <Button>
                        Edit
                      </Button>
                    </Link> */}
                    <Link to={`/tasks/${task._id}/`} style={{ textDecoration: "none"}}>
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
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={tasks.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  )
}



export default TaskTable