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
        <div style={{ 
                    height: 'fit-content',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px' ,
                    
                }}>
            {featuresData.map((feature, index) => (
                <Card 
                    key={index} 
                    style={{ 
                        marginBottom: '20px', 
                        display: 'flex', 
                        width: '75%',
                        height:'fit-content',
                        margin:'auito',
                        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', 
                        alignItems: 'center', 
                        padding:'10px'
                    }}>
                    <Box sx={{ padding: '20px' }}>
                        <img src={feature.image} alt={feature.title} style={{ width: '25rem' }} />
                    </Box>
                    <CardContent 
                    style={{
                        margin:'1rem',
                        padding:'20px',
                        width:'500px'
                    }}>
                        <Typography variant="h5" style={{ 
                                fontFamily: 'Roboto, sans-serif',
                                fontSize: '24px', 
                                fontWeight:'600',
                                letterSpacing: '0.5px', 
                                lineHeight: '1.2', 
                                marginBottom: '10px', 
                                maxWidth: '500px' }}>
                            {feature.title}
                        </Typography>
                        <Typography variant="body2" style={{ 
                                fontFamily: 'Roboto, sans-serif',
                                fontSize: '18px', 
                                fontWeight:'200',
                                letterSpacing: '0.8px', 
                                lineHeight: '1.8', 
                                marginBottom: '10px', 
                                maxWidth: '500px' 
                                }}>
                            {feature.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default Features;
