import React, { useState } from 'react';
import { Box, Button, Container, Typography, Card, CardContent, Grid, CardHeader, CardMedia, CardActions, TextField, IconButton, Skeleton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Colors } from '../../Colors';
import OIP from '../../assets/profile.png'
import Plus from '../../assets/plus.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import LineGraph from '../../component/LineGraph';
import CarouselComponent from '../../component/ReComp/Carousel';
const Dashboard = () => {
  const [cropsData, setCropsData] = useState([
    {
      name: 'XYZ Company',
      price: '40 Rs/kg',
      quantity: '600 kg',
      image: 'path/to/your/image.jpg' // Replace with the actual path to your image
    },
    {
      name: 'XYZ Company',
      price: '40 Rs/kg',
      quantity: '600 kg',
      image: 'path/to/your/image.jpg' // Replace with the actual path to your image
    },
    {
      name: 'XYZ Company',
      price: '40 Rs/kg',
      quantity: '600 kg',
      image: 'path/to/your/image.jpg' // Replace with the actual path to your image
    },
  ]);

  const handleAddMore = () => {
    // Handle adding more crops data
    setCropsData([...cropsData, { /* New crop data */ }]);
  };

  return (
    <Container maxWidth="xl" display={'flex'} sx={{
      height:
        '90vh',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '3rem'
    }}>
      <Box gap={'5rem'} flex={1} display={'flex'} flexDirection={'row'}>
        <Grid container xs={12} md={4}>
          <Grid item md={12} height={'100%'} sx={{
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
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              width: '80%',
              height: '100%',
              marginBottom: '3rem'
            }}>
              <Button variant='contained'
                sx={{
                  backgroundColor: 'white',

                  color: 'black',
                  boxShadow: 3,
                  paddingX: '2rem',
                  fontWeight: 'bold',


                }}
              >Edit</Button>

              <Button variant='contained'
                sx={{
                  backgroundColor: 'white',
                  fontWeight: 'bold',
                  color: 'black',
                  boxShadow: 3,
                  paddingX: '2rem'


                }}
              >More</Button>

            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4} gap={'3rem'} >
          <Grid container sx={
            {
              backgroundColor: Colors.dasboardBackground,
              borderRadius: '2rem',
              boxShadow: 3
            }
          }>          <Typography variant="h3" sx={{
            marginLeft: '2rem', marginTop: '2rem'
          }}>Crops</Typography>
            <Grid item xs={12} marginBottom={'1rem'} padding={'2rem'}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem',
                overflow: 'hidden',
                maxWidth: '100vh'
              }}>
              <CarouselComponent />
            </Grid>
          </Grid>

          <Grid container spacing={2}
            sx={
              {
                backgroundColor: Colors.dasboardBackground,
                borderRadius: '2rem',
                boxShadow: 3,
                padding: '2rem',

              }
            }>
            <Typography variant="h4">Current Contracts</Typography>
            <Grid container flexDirection={'column'} xs={12} sx={{
              display: 'flex',
              height: 250,
              overflowY: 'scroll',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',


            }} >
              <Grid item xs={12}>
                {cropsData.map((crop, index) => (


                  <Card key={index} sx={{
                    borderRadius: '1rem',
                    height: '200',
                    marginBottom: 3
                  }}>
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
        </Grid>
      </Box>
      <Box sx={{

        width: '100%',
        backgroundColor: Colors.dasboardBackground,
        marginTop: 15,
        borderRadius: 5,
        padding: 5

      }}>
        <Box sx={{
          height: '500px',
          width: '100%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Typography variant='h3' sx={{ position: 'absolute', left: 240, fontWeight: 'bold', padding: 2, color: '#1C7690', }}>$27.6k</Typography>
          <LineGraph />
        </Box>
        <Box sx={{

          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          marginTop: '2rem',
          marginBottom: '2rem'
        }}>
          <Box sx={{ backgroundColor: 'white', height: '400px', borderRadius: 5, width: '100%' }} >

          </Box>
          <Box sx={{ backgroundColor: 'white', width: '100%', height: '400px', borderRadius: 5 }}>
            <p style={{ padding: '30px', fontWeight: 'bold', fontSize: '20px' }}>Your Pie Chart</p>
          </Box>
        </Box>
      </Box>

    </Container >
  )
}

export default Dashboard
