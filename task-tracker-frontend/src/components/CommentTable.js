import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { deleteComment, getComments, reset } from '../features/comments/commentSlice'

function CommentTable({ task }) {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { comments } = useSelector((state) => state.comments) 
  const id = task._id
  console.log(id)

  const { isLoading, isError, message } = useSelector((state) => state.comments) 

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if(!user) {
      Navigate('/')
    }

    dispatch(getComments({}))


    return () => {
      dispatch(reset())
    }
  }, [])

  const commentArray = Array.from(comments)
  // console.log(task)

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
      <Grid container >
        <Grid style={{width:"50%", marginLeft: "15%", marginTop: "2%", backgroundColor: "orange", height: "4rem", border: "1px solid black", borderRadius: "1rem" }}>
            <Typography variant="h3" style={{paddingTop: ".2rem", color: "black", textAlign: "center"}}>Task Comments:</Typography>
        </Grid>
        <TableContainer component={Paper} style={{ marginLeft: "15%", width: "50%"}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{height: "2.5rem"}}>
              <TableCell sx={{ width: "10%", fontWeight: "bold", fontSize: "20px"}}>Comment</TableCell>
              <TableCell sx={{ width: "10%", fontWeight: "bold", fontSize: "20px"}}>Made By:</TableCell>
              <TableCell sx={{ width: "10%", fontWeight: "bold", fontSize: "20px"}} key="created">Created</TableCell>
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
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "50%", paddingBottom: '0', paddingTop: "0"}}>{comment.description}</TableCell>
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "25%", paddingBottom: '0', paddingTop: "0"}}>{comment.postedBy}</TableCell>
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{comment.createdAt}</TableCell>
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}></TableCell>
                <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>
                  <Button onClick={(e) => {
                    dispatch(deleteComment(comment._id))
                  }}>
                    delete
                  </Button>
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
      </Grid>
    </>
  )
}

export default CommentTable