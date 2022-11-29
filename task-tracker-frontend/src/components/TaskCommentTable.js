import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import React from 'react'

function TaskCommentTable({ task }) {

  const commentArray = task.comments
  console.log(task)

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, commentArray.length - page * rowsPerPage)

  return (
    <>  
        <Grid style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", backgroundColor: "orange", height: "4rem", border: "1px solid black", borderRadius: "1rem" }}>
            <Typography variant="h3" style={{paddingTop: ".2rem", color: "black", textAlign: "center"}}>Task Comments:</Typography>
        </Grid>
        <TableContainer component={Paper} style={{ marginLeft: "15%", width: "75%"}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{height: "2.5rem"}}>
              <TableCell sx={{ width: "25%", fontWeight: "bold", fontSize: "20px"}}>Comment</TableCell>
              <TableCell sx={{ width: "25%", fontWeight: "bold", fontSize: "20px"}}>Made By:</TableCell>
              <TableCell sx={{ width: "25%", fontWeight: "bold", fontSize: "20px"}} key="created">Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {commentArray
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((comment, index) => (
              <TableRow
                key={index}
                sx={{ height: "4.5rem", '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "50%", paddingBottom: '0', paddingTop: "0"}}>{comment.text}</TableCell>
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "25%", paddingBottom: '0', paddingTop: "0"}}>{comment.postedBy}</TableCell>
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{comment.createdAt}</TableCell>
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}></TableCell>
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>
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
        count={commentArray.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default TaskCommentTable