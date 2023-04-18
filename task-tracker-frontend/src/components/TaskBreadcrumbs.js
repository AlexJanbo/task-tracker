import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function handleButton(e) {
    e.preventDefault()
    window.location.reload()
}

export default function TaskBreadcrumbs(props) {

    // console.log(props)

  return (
    <div role="presentation" onClick={handleClick} style={{ marginTop: "10%"}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to={`/tasks`} style={{ textDecoration: 'none'}} >
          Back to Tasks
        </Link>
        <Button onClick={handleButton} >
            Task id: {props.id}
        </Button>
      </Breadcrumbs>
    </div>
  );
}