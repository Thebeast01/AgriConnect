import React from 'react';
import { Card, CardContent, CardMedia, Badge, Box, Typography } from '@mui/material'

const Features = () => {
        return (
                <div style={{
                        height: '100vh'
                }}>
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
                        <Badge badgeContent={1} color="primary" overlap="circle">
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
                </div>
        )
}

export default Features