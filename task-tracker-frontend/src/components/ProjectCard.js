import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import lizard from '../images/lizard.jpg'


export default function ProjectCard(id, title, description) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={lizard}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          title
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Project Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Project</Button>
      </CardActions>
    </Card>
  );
}