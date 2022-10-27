import { Grid, Paper, Table, TableContainer, Typography } from '@mui/material'
import React from 'react'

function TaskCommentTable({ task }) {

  console.log(task)

  return (
    <>  
        <Grid style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", backgroundColor: "orange", height: "4rem", border: "1px solid black", borderRadius: "1rem" }}>
            <Typography variant="h3" style={{paddingTop: ".2rem", color: "black", textAlign: "center"}}>Task Comments:</Typography>
        </Grid>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{height: "2.5rem"}}>
              <TableCell sx={{ width: "20%", fontWeight: "bold", fontSize: "20px"}}>Title</TableCell>
              <TableCell sx={{ width: "60%", fontWeight: "bold", fontSize: "20px"}}>Description</TableCell>
              <TableCell sx={{ width: "5%", fontWeight: "bold", fontSize: "20px"}} key="priority">
                Priority
                {/* <TableSortLabel
                  active={"priority" === "priority"}
                  direction="asc"
                  // onClick={createSortHandler("priority")}
                >
                </TableSortLabel> */}
              </TableCell>
              <TableCell sx={{ width: "5%", fontWeight: "bold", fontSize: "20px"}} key="status">
                Status
                {/* <TableSortLabel
                  active={"status" === "status"}
                  direction="desc"
                  // onClick={createSortHandler("status")}
                >
                </TableSortLabel> */}
              </TableCell>
              <TableCell sx={{ width: "5%", fontWeight: "bold", fontSize: "20px"}} key="created">
                Created
                {/* <TableSortLabel
                  active={true}
                >
                </TableSortLabel> */}
              </TableCell>
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
        rowsPerPageOptions={[5, 10]}
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

export default TaskCommentTable