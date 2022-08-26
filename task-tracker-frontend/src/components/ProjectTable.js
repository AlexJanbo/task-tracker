import React, { useState} from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material/'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import TablePagination from '@mui/material/TablePagination';

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
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ minWidth: '5rem'}}>Title</TableCell>
            <TableCell sx={{ maxWidth: '5rem'}}>Description</TableCell>
            <TableCell sx={{ minWidth: '5rem'}}></TableCell>
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
              <TableCell>
                <Link to={`/editProject/${project._id}/`}>
                  <Button>
                    Edit
                  </Button>
                </Link>
                <Link to={`/viewProject/${project._id}/`}>
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
            <TableRow>
              <TableCell />
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

  )
}



export default ProjectTable