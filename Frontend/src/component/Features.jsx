import React from 'react';
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
                    top: 70,
                    bottom: 70,
                }} />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    marginLeft: '60px',
                }}>
                    {featuresData.map((feature, index) => (
                        <Card
                            key={index}
                            style={{
                                marginBottom: '20px',
                                display: 'flex',
                                width: '90%',
                                height: 'fit-content',
                                margin: '20px auto',
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
                </div>
            </div>
        </div>
    );
}

export default Features;
