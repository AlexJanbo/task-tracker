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

export default function ProjectBreadcrumbs(props) {

    console.log(props)

  return (
    <div role="presentation" onClick={handleClick} style={{ marginTop: "4%", marginLeft: "15%"}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to={`/tasks`} style={{ textDecoration: 'none'}} >
          Back to tasks
        </Link>
        <Button onClick={handleButton} >
            Project: {props.title}
        </Button>
      </Breadcrumbs>
    </div>
  );
}