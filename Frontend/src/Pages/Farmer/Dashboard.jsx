import React, { useState } from 'react';
import { Box, Button, Container, Typography, Card, CardContent, Grid, CardHeader, CardMedia, CardActions, TextField, IconButton, Skeleton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Colors } from '../../Colors';
import OIP from '../../assets/profile.png'
import Plus from '../../assets/plus.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import LineGraph from '../../component/LineGraph';
import CarouselComponent from '../../component/UI/Carousel';
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
    <Container maxWidth="xl" display={'flex'} backgroundColor={'rgb(198, 255, 198)'} sx={{
      height:'90vh',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '3rem',
    }}>
      <Box gap={'5rem'} flex={1} display={'flex'} flexDirection={'row'}>
        <Grid container xs={12} md={4}>
          <Grid item md={12} width={'100%'} sx={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '2rem',
            boxShadow: 3,

          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              fontFamily: 'Open Sans',
              marginY: '2rem'
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

              }}>
                <img src={OIP} />
                <Typography variant='title' sx={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  lineHeight: 1.5,
                  color: Colors.text1,
                }}>User Name</Typography>

                <Typography variant='subtitle' sx={{
                  fontSize: 18,
                  fontWeight: 'medium',
                  lineHeight: 1.5,
                  color: Colors.text2,
                }}>@UserID</Typography>
              </Box>

              <Box sx={{
                width: '90%',
                boxShadow: 3,
                padding: '1rem',
                borderRadius: '1rem',
                margin: '4rem 2rem'
              }}>
                <Typography variant='body1' sx={{ 
                  fontSize: 18,
                  fontWeight: 'regular',
                  color: Colors.text1,
                  mb: '8px',
                  }}>Name: <span style={{ color: Colors.accent, fontSize: 19 }}>Chandu</span> </Typography>

                <Typography variant='body1' sx={{ 
                  fontSize: 17,
                  fontWeight: 'regular',
                  lineHeight: 1.2,
                  color: Colors.text1,
                  mb: '8px',
                   }}> Email Id: <span style={{ color: Colors.accent, fontSize: 18 }}>Chandu@gmail.com</span> </Typography>

                <Typography variant='body2' sx={{ 
                  color: Colors.text1,
                  fontSize: 16,
                  fontWeight: 'regular',
                  lineHeight: 1.2,
                  mb: '8px',
                  }}>Phone No.<br/> <span style={{ color: Colors.accent, fontSize: 17}}>+91 485948459</span> </Typography>
                  <Typography variant='body2' sx={{ 
                    color: Colors.text1,
                    fontSize: 15,
                    fontWeight: 'regular',
                    lineHeight: 1.2,
                    mb: '8px', 
                    }}>Address: <span style={{color: Colors.accent, fontSize: 14 }}>23F sector 3 , Ram Nagar, New York</span> </Typography>
              </Box>
            </Box>
            <Box sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingX: '10px'
            }}>
              <Button variant='contained'
                sx={{
                  backgroundColor: '#2A9F2F',
                  color: 'white',
                  boxShadow: 3,
                  paddingX: '1.5rem',
                  fontWeight: 'bold',
                }}
              >Edit</Button>

              <Button variant='contained'
                sx={{
                  backgroundColor: 'white',
                  fontWeight: 'bold',
                  color: 'black',
                  boxShadow: 3,
                  paddingX: '1.5rem'


                }}
              >More &#62;</Button>

            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4} gap={'3rem'} >
          <Grid container sx={
            {
              backgroundColor: Colors.background,
              borderRadius: '2rem',
              boxShadow: 3,
              paddingBottom: '2rem',
            }
          }>
            <Typography variant="title" sx={{
              fontSize: '2rem',
              fontWeight: '500',
              color: Colors.text1,
              margin: '1rem 2rem'
          }}>Crops</Typography>
            <Grid item xs={12}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem',
                overflow: 'hidden',
                maxWidth: '100%'
              }}>
              <CarouselComponent />
            </Grid>
          </Grid>

          <Grid container spacing={2}
            sx={
              {
                backgroundColor: Colors.background,
                borderRadius: '2rem',
                boxShadow: 3,
                padding: '2rem',

              }
            }>
            <Typography variant="title" sx={{
              fontSize: '2rem',
              fontWeight: '500',
              color: Colors.text1,
              mb: '1rem',
              ml: '1rem'
            }}>Current Contracts</Typography>
            <Grid container xs={12} sx={{
              display: 'flex',
              flexDirection: 'column',
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
                          <Typography variant="body2" sx={{
                            fontSize: 18,
                            fontWeight: 'regular',
                          }}>
                            Crop Price: <span style={{
                              fontSize: 17,
                              fontWeight: '400',
                            }}>30rs/Kg</span>
                          </Typography>
                          <Typography variant="body2" sx={{
                            fontSize: 18,
                            fontWeight: 'regular',
                          }}>
                            Start Date: <span style={{
                              fontSize: 17,
                              fontWeight: '400',
                            }}>16/11/2024</span>
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" sx={{
                            fontSize: 18,
                            fontWeight: 'regular',
                          }}>
                            Quantity: <span style={{
                              fontSize: 17,
                              fontWeight: '400',
                            }}>500kg</span>
                          </Typography>
                          <Typography variant="body2" sx={{
                            fontSize: 18,
                            fontWeight: 'regular',
                          }}>
                            Due Date: <span style={{
                              fontSize: 17,
                              fontWeight: '400',
                            }}>16/11/2024</span>
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography variant="body2" sx={{
                            fontSize: 18,
                            fontWeight: 'regular',
                          }}>
                        Total: <span style={{
                          fontSize: 17,
                          fontWeight: '400',
                        }}>1,50,000/- Rs</span>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" sx={{fontWeight:'bold'}}>View More</Button>
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
        backgroundColor: Colors.background,
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
