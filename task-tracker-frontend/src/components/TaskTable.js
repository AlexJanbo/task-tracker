import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/'

const tableData = [{
    "id": 1,
    "name": "Carly",
    "email": "ctantum0@ebay.co.uk",
    "description": "Female"
  }, {
    "id": 2,
    "name": "Karim",
    "email": "kkennedy1@ovh.net",
    "description": "Male"
  }, {
    "id": 3,
    "name": "Caryl",
    "email": "cgerleit2@amazon.com",
    "description": "Male"
  }]

function TaskTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}



export default TaskTable