import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function ManageRolesTable(props) {

    const allUsersArray = props.users
    console.log(props.users)
    
  
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, allUsersArray.length - page * rowsPerPage)
  
  
    return (
    <>
        <TableContainer  component={Paper}>
            <Table aria-label="simple table">
            <TableHead>
                <TableRow sx={{height: "2.5rem"}}>
                <TableCell sx={{ minWidth: '10%'}}>First Name</TableCell>
                <TableCell sx={{ maxWidth: '10%'}}>Last Name</TableCell>
                <TableCell sx={{ minWidth: '10%'}}>Username</TableCell>
                <TableCell sx={{ minWidth: '10%'}}>Email</TableCell>
                <TableCell sx={{ minWidth: '10%'}}>Role</TableCell>
                <TableCell sx={{ minWidth: '10%'}}>Joined</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {allUsersArray
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                <TableRow
                    key={user._id}
                    sx={{ height: "4.5rem", '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{user.firstName}</TableCell>
                    <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{user.lastName}</TableCell>
                    <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{user.username}</TableCell>
                    <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{user.email}</TableCell>
                    <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{user.role}</TableCell>
                    <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{user.createdAt}</TableCell>



                    {/* <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}} justfiyContent="center">
                    <Link to={`/projects/${project._id}/`}>
                        <Button>
                        View
                        </Button>
                    </Link>
                    </TableCell> */}
                </TableRow>
                ))}
                {emptyRows > 0 && (
                <TableRow style={{ height: 72 * emptyRows}}>
                    <TableCell colSpan={6}></TableCell>
                </TableRow>
                )}
            </TableBody>
            </Table>
            <TablePagination 
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={allUsersArray.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    </>
  )
}
