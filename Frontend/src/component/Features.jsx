import React from 'react';
<<<<<<< HEAD
import { Card, CardContent, Typography, Box } from '@mui/material';

import Image1 from '../assets/Guaranteed_Market_access.jpg';
import Image2 from '../assets/Dashboard.png';
import Image3 from '../assets/Smart_contracts.jpg';
import Image4 from '../assets/Logistics_Support.jpg';

const featuresData = [
    {
        image: Image1,
        title: 'Guaranteed Market Access & Seamless Communication',
        description: 'Connect directly with reliable buyers and sellers, reducing market risks. Negotiate terms easily through our integrated chat system, ensuring clear communication and faster deal closures.',
    },
    {
        image: Image2,
        title: 'AI-Driven Market Insights & Pricing',
        description: 'Optimize profits with AI-driven pricing suggestions and real-time market insights, helping you make informed decisions and secure the best deals.',
    },
    {
        image: Image3,
        title: 'Smart Contracts & Secure Payments',
        description: 'Leverage blockchain-powered smart contracts for transparent, automated agreements.',
    },
    {
        image: Image4,
        title: 'End-to-End Logistics Support',
        description: 'Simplify delivery with our flexible logistics options, ensuring your products reach their destination on time.',
    },
];
=======
import { Card, CardContent, CardMedia, Badge, Box, Typography } from '@mui/material'
>>>>>>> Vishal

const Features = () => {
    return (
        <div style={{ margin: '2px' }}>
            <div style={{
                height: 'fit-content',
                display: 'flex',
                flexDirection: 'row',
                columnGap: '0px',
                alignItems: 'flex-start',
                padding: '50px',
                position: 'relative',

            }}>
                <Box sx={{
                    width: '10px',
                    backgroundColor: '#39AE3E',
                    position: 'absolute',
                    left: '5%',
                    top: 170,
                    bottom: 70,
                }} />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    marginLeft: '60px'
                }}>
                        <Typography variant='h4' color='#111' fontSize={'2.5rem'} fontWeight={'bold'}>Our Key Features</Typography>
                        <Typography variant='h6' fontSize={'1.5rem'} color='#333' align='left' marginTop={'0.5rem'}>Transforming Agriculture with Technology and Trust</Typography>
<<<<<<< HEAD
                    {featuresData.map((feature, index) => (
                        <Card
                            key={index}
                            style={{
                                marginBottom: '20px',
                                display: 'flex',
                                width: '90%',
                                height: 'fit-content',
                                margin: ' auto',
                                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                                alignItems: 'center',
                                padding: '20px',
                                border: 'none',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                borderRadius: '8px',
                            }}>
                            <Box sx={{
                                padding: '10px',
                                flex: '1 1 40%', // Flexible width to make it responsive
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <img src={feature.image} alt={feature.title} style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: '8px',
                                    objectFit: 'cover',
                                }} />
                            </Box>
                            <CardContent
                                style={{
                                    margin: '1rem',
                                    padding: '20px',
                                    width: '100%',
                                    flex: '1 1 60%', 
                                    maxWidth: '500px',
                                }}>
                                <Typography variant="h5" style={{
                                    fontFamily: 'Roboto, sans-serif',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px',
                                    lineHeight: '1.4',
                                    marginBottom: '10px',
                                }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" style={{
                                    fontFamily: 'Roboto, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: '300',
                                    letterSpacing: '0.5px',
                                    lineHeight: '1.6',
                                    marginBottom: '10px',
                                }}>
                                    {feature.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
=======
                        <Box 
                                sx={{
                                        width: '100vw',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: '3rem'

                                }}
                        >
                                <Typography variant='h4' color='#111' fontSize={'2.5rem'} fontWeight={'bold'}>Our Key Features</Typography>
                                <Typography variant='h6' fontSize={'1.5rem'} color='#333' align='left' marginTop={'0.5rem'}>Transforming Agriculture with Technology and Trust</Typography>
                        </Box>
                        <Box sx={{
                                width: '90vw',
                                borderLeft: '15px solid rgba(45, 125, 45, 0.7)',
                                marginLeft: '4rem',
                                paddingLeft: '2rem'
                        }}>
                                <Box sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        width: '100%',
                                        marginTop: '6rem',
                                        marginBottom: '4rem',
                                        }}>
                                        <Box sx={{
                                                width: '55rem',
                                                height: '12rem',
                                                display: 'flex',
                                                background: 'url(../../public/assets/images/communication-img.jpg)',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'contain',
                                                marginRight: '4rem',
                                        }} />

                                        <Box sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap'
                                        }}>
                                        <Typography variant='h3' color='#222' fontWeight={'bold'} marginBottom={'2rem'}>Guaranteed Market Access & <br/>Seamless Communication</Typography>
                                        <Typography variant='h6' color='#222'>Connect directly with reliable buyers and sellers, reducing market risks. Negotiate terms easily through our integrated chat system, ensuring clear communication and faster deal closures.</Typography>
                                        </Box>
                                </Box>
                                <Box sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        width: '100%',
                                        marginBottom: '4rem'
                                        }}>
                                        <Box>
                                                <Typography variant='h3' color='#222' fontWeight={'bold'} margin={'2.5rem 0'}>AI-Driven Market Insights <br/>& Pricing</Typography>
                                                <Typography variant='h6' color='#222'>Optimize profits with AI-driven pricing suggestions and real-time market insights, helping you make informed decisions and secure the best deals.</Typography>
                                        </Box>
                                        <Box sx={{
                                                width: '55rem',
                                                height: '18rem',
                                                background: 'url(../../public/assets/images/market-img.png)',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'contain',
                                                marginRight: '4rem',
                                        }} />
                                </Box>
                                <Box sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        width: '100%',
                                        marginBottom: '4rem'
                                        }}>
                                        <Box sx={{
                                                width: '55rem',
                                                height: '18rem',
                                                display: 'flex',
                                                background: 'url(../../public/assets/images/secure-payment-img.jpg)',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'contain',
                                                marginRight: '4rem',
                                                marginTop: '-3rem'
                                        }} />

                                        <Box>
                                        <Typography variant='h3' color='#222' fontWeight={'bold'} marginBottom={'2rem'}>Smart Contracts & Secure <br/>Payments</Typography>
                                        <Typography variant='h6' color='#222'>Leverage blockchain-powered smart contracts for transparent, automated agreements, ensuring trust and timely payments for both parties.</Typography>
                                        </Box>
                                </Box>
                                <Box sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        width: '100%',
                                        marginBottom: '4rem'
                                        }}>
                                        <Box>
                                                <Typography variant='h3' color='#222' fontWeight={'bold'} marginBottom={'2rem'}>End-to-End Logistics Support</Typography>
                                                <Typography variant='h6' color='#222'>Simplify delivery with our flexible logistics options, ensuring your produce reaches its destination on time—whether using your own transport or our partnered services.</Typography>
                                        </Box>
                                        <Box sx={{
                                                width: '55rem',
                                                height: '16rem',
                                                background: 'url(../../public/assets/images/logistic-img.jpg)',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'contain',
                                                marginTop: '-3rem'
                                        }} />
                                </Box>
                </Box>
                <Box sx={{
                        width: '100%',
                        height: '13rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(54, 126, 54)'
                }}>
                        <Typography variant='h3' fontSize={'2rem'} fontWeight={'bold'} color='#fff'>How It Works</Typography>
                        <Typography variant='h5' fontSize={'1.25rem'} color='rgb(236, 234, 234)'>Simple Steps to Connect , Contract and Cultivate Success</Typography>
                </Box>
                <Box sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                }}>
                <Card style={{
                                maxWidth: 345,
                                margin: '20px',
                                boxShadow: '1px 2px 4px rgba(2, 2, 2, 0.2)',
                                borderRadius: '10px',
                                padding: '10px',
                        }}>
                        <Badge badgeContent={1} color='primary' style={{
                                fontSize: 20,
                                padding: '8px',
                                backgroundColor: 'red',
                                color: 'white',
                        }}>
                                
                        </Badge>
                        <CardMedia
                                component="img"
                                alt="Sign-in/Sing-up"
                                width= "140"
                                image="../../public/assets/images/sign-up-img.jpg"
                                title="Sign-Up"
                                style={{ objectFit: 'contain' }}
                        />
                        <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Sign Up & Choose Your <br/>Role:
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Create an account, select your role, and set up your profile.
                                </Typography>
                        </CardContent>
                </Card>
                </Box>
>>>>>>> Vishal
                </div>
            </div>
        </div>
    );
}

export default Features;
