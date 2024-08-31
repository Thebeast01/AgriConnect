import React from 'react'
import { Container,Typography, CardMedia, CardContent, Box, Card } from '@mui/material';
import img5 from '../assets/background_bg1.png';
import img6 from '../assets/bg1.png';
import img7 from '../assets/sign-up-img.jpg';
import img8 from '../assets/explore-img.jpg';
import img9 from '../assets/negotiate-img.jpg';
import img10 from '../assets/manage-img.jpg';

const HowItWorks = () => {
  return (
    <div>
       <Box sx={{
                        borderTop: '1px solid #888',
                }}>
                <Box sx={{
                        width: '100%',
                        height: '10rem',
                        background: `url(${img5})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                        mt: '5rem',
                }}>
                    <Box sx={{
                        width: '27rem',
                        height: '25rem',
                        background: `url(${img6})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        position: 'absolute',
                        top: '-7rem',
                        right: '1rem',
                        
                    }} />
                </Box>
            </Box>
            <Box sx={{
                    width: '100%',
                    height: '12rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#64C267',
                    border: 'none',
                    }}>
                    <Typography variant='h3' fontSize={'2rem'} fontWeight={'bold'} color='#fff'>How It Works</Typography>
                    <Typography variant='h5' fontSize={'1.25rem'} color='rgb(236, 234, 234)'>Simple Steps to Connect , Contract and Cultivate Success</Typography>
            </Box>
            <Box sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            mt: '-1.5rem',
                            mb: '10rem'
                    }}>
                    <Card style={{ 
                            width: '270px',
                            margin: '0 2rem',
                            padding: '1rem' ,
                            position: 'relative',
                            borderRadius: '0.5rem',
                            boxShadow: '1px 2px 10px #888',
                            overflow: 'visible'
                            }}>
                            <Box sx={{
                                width: '4rem',
                                height: '4rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '-32px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                zIndex: 1,
                            }}>
                                <Typography
                                    variant="h5"
                                    style={{
                                    width: '2.5rem',
                                    height: '2.5rem',
                                    backgroundColor: '#fff',
                                    padding: '2px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    verticalAlign: 'center',
                                    fontSize: '22px',
                                    border: '2px solid #64C267',
                                    }}
                                >
                                    1
                                </Typography>
                            </Box>
                            <CardMedia
                                component="img"
                                image={img7}
                                alt="sign-up"
                                height= "210"
                                objectFit= "contain"
                                sx={{
                                    marginTop: '1rem'
                                }}
                              
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom fontSize={'16px'} fontWeight={'bold'} sx={{
                                        textAlign: 'center',
                                      }}>
                                Sign Up & Choose Your <br/>Role:
                                </Typography>
                                <Typography 
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    sx={{
                                        textAlign: 'center',
                                      }}>
                                        Create an account, select your role, and set up your profile.
                                </Typography>
                            </CardContent>
                    </Card>

                    <Card style={{ 
                            width: '270px',
                            margin: '0 2rem',
                            padding: '1rem' ,
                            position: 'relative',
                            borderRadius: '0.5rem',
                            boxShadow: '1px 2px 10px #888',
                            overflow: 'visible'
                            }}>
                            <Box sx={{
                                width: '4rem',
                                height: '4rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '-32px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                zIndex: 1,
                            }}>
                                <Typography
                                    variant="h5"
                                    style={{
                                    width: '2.5rem',
                                    height: '2.5rem',
                                    backgroundColor: '#fff',
                                    padding: '2px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    verticalAlign: 'center',
                                    fontSize: '22px',
                                    border: '2px solid #64C267',
                                    }}
                                >
                                    2
                                </Typography>
                            </Box>
                            <CardMedia
                                component="img"
                                image={img8}
                                alt="Explore & Connect"
                                height= '210'
                                objectFit= 'contain'
                                sx={{
                                    marginTop: '1rem'
                                }}
                              
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom fontSize={'16px'} fontWeight={'bold'} sx={{
                                        textAlign: 'center',
                                      }}>
                                Explore & Connect
                                </Typography>
                                <Typography 
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    sx={{
                                        textAlign: 'center',
                                      }}>
                                        Browse and connect with potential partners, either farmers or buyers.
                                </Typography>
                            </CardContent>
                    </Card>
                    <Card style={{ 
                            width: '270px',
                            margin: '0 2rem',
                            padding: '1rem' ,
                            position: 'relative',
                            borderRadius: '0.5rem',
                            boxShadow: '1px 2px 10px #888',
                            overflow: 'visible'
                            }}>
                            <Box sx={{
                                width: '4rem',
                                height: '4rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '-32px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                zIndex: 1,
                            }}>
                                <Typography
                                    variant="h5"
                                    style={{
                                    width: '2.5rem',
                                    height: '2.5rem',
                                    backgroundColor: '#fff',
                                    padding: '2px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    verticalAlign: 'center',
                                    fontSize: '22px',
                                    border: '2px solid #64C267',
                                    }}
                                >
                                    3
                                </Typography>
                            </Box>
                            <CardMedia
                                component="img"
                                image={img9}
                                alt="Negotiate & Finalize"
                                height= '210'
                                objectFit= 'contain'
                                sx={{
                                    marginTop: '1rem'
                                }}
                              
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom fontSize={'16px'} fontWeight={'bold'} sx={{
                                        textAlign: 'center',
                                      }}>
                                Negotiate & Finalize
                                </Typography>
                                <Typography 
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    sx={{
                                        textAlign: 'center',
                                      }}>
                                        Discuss terms through chat and finalize agreements with a secure contract.
                                </Typography>
                            </CardContent>
                    </Card>
                    <Card style={{ 
                            width: '270px',
                            margin: '0 2rem',
                            padding: '1rem' ,
                            position: 'relative',
                            borderRadius: '0.5rem',
                            boxShadow: '1px 2px 10px #888',
                            overflow: 'visible'
                            }}>
                            <Box sx={{
                                width: '4rem',
                                height: '4rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '-32px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                zIndex: 1,
                            }}>
                                <Typography
                                    variant="h5"
                                    style={{
                                    width: '2.5rem',
                                    height: '2.5rem',
                                    backgroundColor: '#fff',
                                    padding: '2px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    verticalAlign: 'center',
                                    fontSize: '22px',
                                    border: '2px solid #64C267',
                                    }}
                                >
                                    4
                                </Typography>
                            </Box>
                            <CardMedia
                                component="img"
                                image={img10}
                                alt="Manage & Monitor"
                                height= '210'
                                objectFit= 'contain'
                                sx={{
                                    marginTop: '1rem'
                                }}
                              
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom fontSize={'16px'} fontWeight={'bold'} sx={{
                                        textAlign: 'center',
                                      }}>
                                Manage & Monitor
                                </Typography>
                                <Typography 
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    sx={{
                                        textAlign: 'center',
                                      }}>
                                        Keep track of ongoing deals and milestones from your dashboard.
                                </Typography>
                            </CardContent>
                    </Card>
                    </Box>
    </div>
  )
}

export default HowItWorks
