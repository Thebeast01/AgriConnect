import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material';



const featuresData = [
        {
            image: '../assets/Dashboard.png',
            title: 'Guaranteed Market Access & Seamless Communication',
            description: 'Connect directly with reliable buyers and sellers, reducing market risks.',
        },
        {
            image: '/path/to/image2.png',
            title: 'AI-Driven Market Insights & Pricing',
            description: 'Optimize profits with AI-driven pricing suggestions and real-time market insights.',
        },
        {
            image: '/path/to/image3.png',
            title: 'Smart Contracts & Secure Payments',
            description: 'Leverage blockchain-powered smart contracts for transparent, automated agreements.',
        },
        {
            image: '/path/to/image4.png',
            title: 'End-to-End Logistics Support',
            description: 'Simplify delivery with our flexible logistics options, ensuring your products reach their destination on time.',
        },
    ];


const Features = () => {
        return (
                <div style={{ height: '100vh', padding: '20px' }}>
            {featuresData.map((feature, index) => (
                <Card key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ padding: '20px' }}>
                        <img src={feature.image} alt={feature.title} style={{ width: '80px', height: '80px' }} />
                    </Box>
                    <CardContent>
                        <Typography variant="h6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                            {feature.title}
                        </Typography>
                        <Typography variant="body2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                            {feature.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
        )
}

export default Features
