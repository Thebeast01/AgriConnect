import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import img1 from '../assets/Guaranteed_Market_access.jpg';
import img2 from '../assets/Dashboard.png';
import img3 from '../assets/Smart_contracts.jpg';
import img4 from '../assets/Logistics_Support.jpg';

const featuresData = [
  {
    image: img1,
    title: 'Guaranteed Market Access & Seamless Communication',
    description: 'Connect directly with reliable buyers and sellers, reducing market risks. Negotiate terms easily through our integrated chat system, ensuring clear communication and faster deal closures.',
  },
  {
    image: img2,
    title: 'AI-Driven Market Insights & Pricing',
    description: 'Optimize profits with AI-driven pricing suggestions and real-time market insights, helping you make informed decisions and secure the best deals.',
  },
  {
    image: img3,
    title: 'Smart Contracts & Secure Payments',
    description: 'Leverage blockchain-powered smart contracts for transparent, automated agreements, ensuring trust and timely payments for both parties.',
  },
  {
    image: img4,
    title: 'End-to-End Logistics Support',
    description: 'Simplify delivery with our flexible logistics options, ensuring your produce reaches its destination on time—whether using your own transport or our partnered services.',
  },
];

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
        {featuresData.map((feature, index) => (
          <Box key={index} sx={{
            display: 'flex',
            alignItems: 'flex-start',
            width: '100%',
            marginBottom: '4rem',
            marginTop: index === 0 ? '6rem' : 0,
          }}>
            {index % 2 === 0 ? (
              <Box sx={{
                width: '100%',
                height: '22rem',
                flex: '1',
                background: `url(${feature.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                marginRight: '4rem',
              }} />
            ) : null}
            <Box sx={{
              flex: '1',
              display: 'flex',
              flexWrap: 'wrap'
            }}>
              <Typography variant='h4' color='#222' fontWeight={'bold'} marginBottom={'2rem'}>{feature.title}</Typography>
              <Typography variant='h6' color='#222'>{feature.description}</Typography>
            </Box>
            {index % 2 !== 0 ? (
              <Box sx={{
                width: '100%',
                height: '22rem',
                flex: '1',
                background: `url(${feature.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                marginLeft: '4rem',
              }} />
            ) : null}
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Features;