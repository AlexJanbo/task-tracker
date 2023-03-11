import { Box, CircularProgress, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInformation, reset } from '../features/auth/authSlice'

function ProjectMembersTable(props) {

    const projectMembers = props.members
    console.log(projectMembers)
    // console.log(projectMembers)
    // const [ memberIds, setMemberIds ] = useState([...projectMembers])
    // const [ members ] = useSelector((state) => state.auth.members)
    // const { isLoading } = useSelector((state) => state.auth)
    // console.log(isLoading)
    // console.log(members)


    // console.log("is members array: " + Array.isArray(members))





    // const dispatch = useDispatch()


    // useEffect(() => {

    //     dispatch(getUserInformation({memberIds}))

    // }, [])


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, projectMembers.length - page * rowsPerPage)

    // if(isLoading) {
    //     return <CircularProgress sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
    // }

    return (
        <Box flex={5} p={1} sx={{ marginLeft: "15%", display: {lg: "block" } }}>
            <Grid style={{ marginLeft: "5%", marginRight: "5%", marginTop: "7%", backgroundColor: "orange", height: "4rem", border: "2px solid black", borderRadius: "1rem" }}>
                <Typography variant="h3" style={{paddingTop: ".2rem", color: "black", textAlign: "center"}}>Project Members!</Typography>
            </Grid>
            <TableContainer  component={Paper}>
                <Table aria-label="simple table">
                <TableHead>
                    <TableRow sx={{height: "2.5rem"}}>
                    <TableCell sx={{ minWidth: '20%'}}>First Name</TableCell>
                    <TableCell sx={{ maxWidth: '60%'}}>Last Name</TableCell>
                    <TableCell sx={{ minWidth: '20%%'}}>Username</TableCell>
                    <TableCell sx={{ minWidth: '20%%'}}>Email</TableCell>
                    <TableCell sx={{ minWidth: '20%%'}}>Role</TableCell>
                    
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projectMembers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((member, index) => (
                    <TableRow
                        key={member.username}
                        sx={{ height: "4.5rem", '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{member.firstName}</TableCell>
                        <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{member.lastName}</TableCell>
                        <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{member.username}</TableCell>
                        <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{member.email}</TableCell>
                        <TableCell sx={{paddingleft: "3", paddingRight: "3", width: "10%", paddingBottom: '0', paddingTop: "0"}}>{member.role}</TableCell>
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
                count={projectMembers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Box>
  )
}

export default ProjectMembersTable