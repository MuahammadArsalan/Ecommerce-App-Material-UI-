import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.src}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.category}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
          {props.desc}

        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained">Show more</Button>      </CardActions>
     
    </Card>
  );
}
export default ImgMediaCard