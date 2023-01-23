import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea, Rating } from '@mui/material';
import lizard from '../images/lizard.jpg'

export default function MultiActionAreaCard( props ) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image={lizard}
          alt="green iguana"
        /> */}
        <Avatar alt="green lizard" src={lizard} sx={{ width: 100, height: 100}} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.review}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Rating name="read-only" value={5} readOnly />
    </Card>
  );
}