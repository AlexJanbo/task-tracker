import React, { useState} from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box } from '@mui/material/'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import TablePagination from '@mui/material/TablePagination';
import ProjectHeader from './ProjectHeader';

function ProjectTable() {

  
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
      <ProjectHeader />
      <TableContainer  component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{height: "2.5rem"}}>
              <TableCell sx={{ minWidth: '25rem'}}>Title</TableCell>
              <TableCell sx={{ maxWidth: '25rem'}}>Description</TableCell>
              <TableCell sx={{ minWidth: '25rem'}}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectArray
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((project, index) => (
              <TableRow
                key={project._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{project.title}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell sx={{paddingLeft: "25"}}>
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