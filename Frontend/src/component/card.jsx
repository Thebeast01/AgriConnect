import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

function MyCard() {
  return (
    <Card style={{ maxWidth: 345, margin: '20px auto' }}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          Card Title
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This is a sample card.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MyCard