import React from 'react';
import { Card, CardContent, CardMedia, Badge, Box, Typography } from '@mui/material';
import img1 from '../assets/Guaranteed_Market_access.jpg';
import img2 from '../assets/Dashboard.png';
import img3 from '../assets/Smart_contracts.jpg';
import img4 from '../assets/Logistics_Support.jpg';

const Features = () => {
    return (
            <div>
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
                                            width: '100%',
                                            height: '22rem',
                                            flex: '1',
                                            background: `url(${img1})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'contain',
                                            marginRight: '4rem',
                                    }} />

                                    <Box sx={{
                                            flex: '1',
                                            display: 'flex',
                                            flexWrap: 'wrap'
                                    }}>
                                    <Typography variant='h4' color='#222' fontWeight={'bold'} marginBottom={'2rem'}>Guaranteed Market Access & <br/>Seamless Communication</Typography>
                                    <Typography variant='h6' color='#222'>Connect directly with reliable buyers and sellers, reducing market risks. Negotiate terms easily through our integrated chat system, ensuring clear communication and faster deal closures.</Typography>
                                    </Box>
                            </Box>
                            <Box sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    width: '100%',
                                    marginBottom: '4rem'
                                    }}>
                                    <Box sx={{
                                            flex: '1',
                                            display: 'flex',
                                            flexWrap: 'wrap'
                                    }}>
                                            <Typography variant='h4' color='#222' fontWeight={'bold'} margin={'2.5rem 0'}>AI-Driven Market Insights <br/>& Pricing</Typography>
                                            <Typography variant='h6' color='#222'>Optimize profits with AI-driven pricing suggestions and real-time market insights, helping you make informed decisions and secure the best deals.</Typography>
                                    </Box>
                                    <Box sx={{
                                            width: '100%',
                                            height: '22rem',
                                            flex: '1',
                                            background: `url(${img2})`,
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
                                            width: '100%',
                                            height: '22rem',
                                            flex: '1',
                                            background: `url(${img3})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'contain',
                                            marginRight: '4rem',
                                            marginTop: '-3rem'
                                    }} />

                                    <Box sx={{
                                            flex: '1',
                                            display: 'flex',
                                            flexWrap: 'wrap'
                                    }}>
                                    <Typography variant='h4' color='#222' fontWeight={'bold'} marginBottom={'2rem'}>Smart Contracts & Secure <br/>Payments</Typography>
                                    <Typography variant='h6' color='#222'>Leverage blockchain-powered smart contracts for transparent, automated agreements, ensuring trust and timely payments for both parties.</Typography>
                                    </Box>
                            </Box>
                            <Box sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    width: '100%',
                                    marginBottom: '4rem'
                                    }}>
                                    <Box sx={{
                                            flex: '1',
                                            display: 'flex',
                                            flexWrap: 'wrap'
                                    }}>
                                            <Typography variant='h4' color='#222' fontWeight={'bold'} marginBottom={'2rem'}>End-to-End Logistics Support</Typography>
                                            <Typography variant='h6' color='#222'>Simplify delivery with our flexible logistics options, ensuring your produce reaches its destination on time—whether using your own transport or our partnered services.</Typography>
                                    </Box>
                                    <Box sx={{
                                            width: '100%',
                                            height: '22rem',
                                            flex: '1',
                                            background: `url(${img4})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'contain',
                                            marginTop: '-3rem'
                                    }} />
                            </Box>
            </Box>           
            </div>
    )
}

export default Features