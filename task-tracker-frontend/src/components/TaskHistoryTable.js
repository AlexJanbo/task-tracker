import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography, useTheme } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment, reset } from '../features/comments/commentSlice';
import CommentImageModal from './CommentImageModal';

function TaskHistoryTable( props ) {
    
    const eventArray = props.events
    console.log(eventArray)
    const theme = useTheme()

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, eventArray.length - page * rowsPerPage)

    const formatDate = (date) => {
        let formattedDate = new Date(date).toLocaleString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        })
        return formattedDate
    }

    // const eventTypeToValue = (eventObject) => {
    //     switch (eventObject.eventType) {
    //         case 'task-created':
    //           // Set the task's deadline and priority to the values in the event data

    //           break;
    //         case 'task-title-updated':
    //           // Set the task's status to 'completed'
    //           break;
    //         case 'task-description-updated':
    //             // Set the task's status to 'completed'
    //             break;
    //         case 'task-priority-updated':
    //           // Set the task's priority to the value in the event data
    //           break;
    //         case 'task-status-updated':
    //           // Set the task's deadline to the value in the event data
    //           break;
    //         case 'task-deadling-updated':
    //           // Set the task's deadline to the value in the event data
    //           break;
    //         default:
    //           // Ignore any unknown event types
    //           break;
    //       }
    // }
  
    return (
        <>  
            <Grid container >
                
                <TableContainer component={Paper}>
                <Table aria-label="simple table" >
                    <TableHead style={{ backgroundColor: theme.palette.primary.main}}>
                        <TableRow >
                            <TableCell sx={{ fontWeight: "bold", fontSize: "20px", color: theme.palette.text.primary}}>Change</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "20px", color: theme.palette.text.primary}}>New Value</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "20px", color: theme.palette.text.primary}}>Old Value</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "20px", color: theme.palette.text.primary}}>Made By</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "20px", color: theme.palette.text.primary}}>Made At</TableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
                    {eventArray
                    // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((event, index) => (
                    <TableRow
                        key={index}
                        sx={{ height: "4.5rem", '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell sx={{paddingleft: "3", paddingRight: "3", paddingBottom: '0', paddingTop: "0"}}>{event.eventType}</TableCell>
                        <TableCell sx={{paddingleft: "3", paddingRight: "3", paddingBottom: '0', paddingTop: "0"}}>{event.eventType === "task-deadline-updated"? formatDate(event.data.newValue) : event.data.newValue }</TableCell>
                        <TableCell sx={{paddingleft: "3", paddingRight: "3", paddingBottom: '0', paddingTop: "0"}}>{event.data.oldValue}</TableCell>
                        <TableCell sx={{paddingleft: "3", paddingRight: "3", paddingBottom: '0', paddingTop: "0"}}>{event.userId}</TableCell>
                        <TableCell sx={{paddingleft: "3", paddingRight: "3", paddingBottom: '0', paddingTop: "0"}}>{formatDate(event.timestamp)}</TableCell>
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
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={eventArray.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
                </TableContainer>
            </Grid>
        </>
  )
}

export default TaskHistoryTable