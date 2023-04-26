import React, { useState} from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Grid, Typography, useTheme } from '@mui/material/'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import TablePagination from '@mui/material/TablePagination';

function ProjectTable() {

  const theme = useTheme()  
  const { projects } = useSelector((state) => state.projects) 
  // console.log(projects)

  const projectArray = Array.from(projects)
  // console.log(projectArray)
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, projects.length - page * rowsPerPage)

  return (
    <Box flex={5} p={1} sx={{ display: {lg: "block" } }}>
      <Grid style={{ marginLeft: "5%", marginRight: "5%", marginTop: "7%", backgroundColor: theme.palette.primary.main, height: "4rem", border: "2px solid black", borderRadius: "1rem" }}>
          <Typography variant="h3" style={{paddingTop: ".2rem", textAlign: "center", color: theme.palette.text.primary}}>My Projects!</Typography>
      </Grid>
      <TableContainer  component={Paper} style={{ backgroundColor: theme.palette.background.paper}}>
        <Table aria-label="simple table" >
          <TableHead >
            <TableRow  sx={{height: "2.5rem"}}>
              <TableCell style={{ color: theme.palette.text.primary}}>Title</TableCell>
              <TableCell style={{ color: theme.palette.text.primary}}>Description</TableCell>
              <TableCell ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectArray
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((project, index) => (
              <TableRow
                key={project._id}
                sx={{ height: "4.5rem", '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell style={{ color: theme.palette.text.primary}}>{project.title}</TableCell>
                <TableCell style={{ color: theme.palette.text.primary}}>{project.description}</TableCell>
                <TableCell style={{ color: theme.palette.text.primary}}>
                  <Link to={`/projects/${project._id}/`}>
                    <Button>
                      View
                    </Button>
                  </Link>
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
        <TablePagination 
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={projects.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>

  )
}



export default ProjectTable