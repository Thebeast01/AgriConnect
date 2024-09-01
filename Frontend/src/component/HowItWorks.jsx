import React from 'react';
import { Container, Typography, CardMedia, CardContent, Box, Card } from '@mui/material';
import img1 from '../assets/background_bg1.png';
import img2 from '../assets/bg1.png';
import img3 from '../assets/sign-up-img.jpg';
import img4 from '../assets/explore-img.jpg';
import img5 from '../assets/negotiate-img.jpg';
import img6 from '../assets/manage-img.jpg';

const HowItWorks = () => {
  return (
    <Box sx={{ width: '100%', mt: '13rem' }}>
      <Box sx={{
        width: '100%',
        height: '10rem',
        background: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        mt: '5rem',
      }}>
        <Box sx={{
          width: '27rem',
          height: '25rem',
          background: `url(${img2})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: '-7rem',
          right: '1rem',
        }} />
      </Box>
      <Box sx={{
        width: '100%',
        height: '10rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#64C267',
        border: 'none',
        padding: '1rem 0',
      }}>
        <Typography variant='h3' fontSize={'2rem'} fontWeight={'bold'} color='#fff'>How It Works</Typography>
        <Typography variant='h5' fontSize={'1.25rem'} color='rgb(236, 234, 234)'>Simple Steps to Connect, Contract and Cultivate Success</Typography>
      </Box>
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        mt: '-2.5rem',
        mb: '10rem',
      }}>
        {[
          { image: img3, title: 'Sign Up & Choose Your Role', description: 'Create an account, select your role, and set up your profile.', number: 1 },
          { image: img4, title: 'Explore & Connect', description: 'Browse and connect with potential partners, either farmers or buyers.', number: 2 },
          { image: img5, title: 'Negotiate & Finalize', description: 'Discuss terms through chat and finalize agreements with a secure contract.', number: 3 },
          { image: img6, title: 'Manage & Monitor', description: 'Keep track of ongoing deals and milestones from your dashboard.', number: 4 },
        ].map((item, index) => (
          <Card key={index} sx={{
            width: '270px',
            margin: '0 2rem',
            padding: '1rem',
            position: 'relative',
            borderRadius: '0.5rem',
            boxShadow: '1px 2px 10px #888',
            overflow: 'visible',
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
              <Typography variant="h5" sx={{
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
              }}>
                {item.number}
              </Typography>
            </Box>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              height="210"
              objectFit="contain"
              sx={{ marginTop: '1rem' }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom fontSize={'16px'} fontWeight={'bold'} sx={{ textAlign: 'center' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" sx={{ textAlign: 'center' }}>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default HowItWorks;