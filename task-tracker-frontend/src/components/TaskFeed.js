import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import TaskHeader from './TaskHeader'

function TaskFeed() {


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
        <Box flex={4} p={2} sx={{ display: { md: "block", lg: "none" } }}>
            <TaskHeader />
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow sx={{height: "2.5rem"}}>
                        <TableCell sx={{ width: "20%", fontWeight: "bold", fontSize: "20px"}}>Title</TableCell>
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

export default TaskFeed