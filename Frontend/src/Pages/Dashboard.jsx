import React, { useState } from 'react';
import { Box, Button, Container, Typography, Card, CardContent, Grid, CardHeader, CardMedia, CardActions, TextField, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Colors } from '../Colors';
import OIP from '../assets/profile.png'
const Dashboard = () => {
  const [cropsData, setCropsData] = useState([
    {
      name: 'XYZ Company',
      price: '40 Rs/kg',
      quantity: '600 kg',
      image: 'path/to/your/image.jpg' // Replace with the actual path to your image
    }
  ]);

  const handleAddMore = () => {
    // Handle adding more crops data
    setCropsData([...cropsData, { /* New crop data */ }]);
  };
  return (
    <Container maxWidth="xl" display={'flex'}>
      <Box gap={'5rem'} flex={1} display={'flex'} flexDirection={'row'}>
        <Grid container xs={12} md={4}>
          <Grid item md={12} height={'70vh'} sx={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem',
            borderRadius: '2rem',
            boxShadow: 3

          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

              }}>
              <img src={OIP} />
                <Typography fontWeight={'bold'} variant='h5' marginTop={'1rem'}>User Name</Typography>
                <Typography fontWeight={'bold'} variant='h6' color={Colors.text1}>@UserID</Typography>
              </Box>
              <Box sx={{
                marginTop: '2rem',
                boxShadow: 3,
                padding: '2rem',
                borderRadius: '1rem',

              }}>
                <Typography sx={{ color: Colors.text1, fontWeight: 'bold', marginBottom: '10px' }}>Farmer Name : <span style={{ color: 'black' }}>Chandu</span> </Typography>
                <Typography sx={{ color: Colors.text1, fontWeight: 'bold', marginBottom: '10px' }}> Email Id: <span style={{ color: 'black' }}>Chandu@gmail.com</span> </Typography>
                <Typography sx={{ color: Colors.text1, fontWeight: 'bold', marginBottom: '10px' }}>Phone No. : <span style={{ color: 'black' }}>485948459</span> </Typography>  <Typography sx={{ color: Colors.text1, fontWeight: 'bold', marginBottom: '10px' }}>Address: <span style={{ color: 'black' }}>23F sector 3 , Ram Nagar, New York</span> </Typography>
              </Box>

            </Box>
            <Box sx={{
              marginTop: '5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '80%'
            }}>
              <Button variant='contained'
                sx={{
                  backgroundColor: 'white',

                  color: 'black',
                  boxShadow: 3,
                  paddingX: '2rem'


                }}
              >Edit</Button>
              <Button variant='contained'>More</Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">Crops</Typography>
              <IconButton onClick={handleAddMore}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
            <Card>
              <CardContent>
                <Typography variant="body2">
                  Price: 40 Rs/kg
                </Typography>
                <Typography variant="body2">
                  Quantity upto: 600 kg
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Current Contracts</Typography>
              {cropsData.map((crop, index) => (
                <Card key={index}>
                  <CardHeader
                    title="Buyer's Name: XYZ Company"
                    subheader="Crop Name: ABC"
                  />
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body2">
                          Crop Price: 30rs/Kg
                        </Typography>
                        <Typography variant="body2">
                          Start Date: 16/11/2024
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2">
                          Quantity: 500kg
                        </Typography>
                        <Typography variant="body2">
                          Due Date: 16/11/2024
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography variant="body2">
                      Total: 1,50,000/- Rs
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View More</Button>
                  </CardActions>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container >
  )
}

export default Dashboard
