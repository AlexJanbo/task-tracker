import { Button, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeRole, reset } from '../features/auth/authSlice'
import UpdateRolesMenu from './UpdateRolesMenu'

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
        <TableContainer  component={Paper} sx={{ maxWidth: "80vw"}}>
            <Table aria-label="simple table">
            <TableHead>
                <TableRow >
                    <TableCell >First Name</TableCell>
                    <TableCell >Last Name</TableCell>
                    <TableCell >Username</TableCell>
                    <TableCell >Email</TableCell>
                    <TableCell >Role</TableCell>
                    <TableCell >Joined</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {allUsersArray
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                <TableRow
                    key={user._id}
                    sx={{'&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell >{user.firstName}</TableCell>
                    <TableCell >{user.lastName}</TableCell>
                    <TableCell >{user.username}</TableCell>
                    <TableCell >{user.email}</TableCell>
                    <TableCell >
                        <UpdateRolesMenu user={user} />
                    </TableCell>
                    <TableCell >{user.createdAt}</TableCell>



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
