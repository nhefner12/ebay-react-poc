import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import placeholder from '../assets/image_placeholder.png';

export default function ProductCard() {

  return (
    <Card sx={{ maxWidth: '250px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'primary.main' }} aria-label="product-cost">
            <Typography variant='caption'>10$</Typography>
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        image={placeholder}
        alt="Product Image"
        sx={{maxHeight: '300px', maxWidth: '250px'}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}