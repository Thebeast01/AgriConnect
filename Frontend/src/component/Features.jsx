import React from 'react';
import { Card, CardContent, CardMedia, Badge, Box, Typography } from '@mui/material'

const Features = () => {
    return (
        <div style={{ margin: '2px' }} id='feature'>
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
                                flex: '1 1 40%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <img src={feature.image} alt={feature.title} style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: '8px',
                                    objectFit: 'cover',
                                }} />
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
                                <Typography variant="body2" color="textSecondary" component="p">
                                Create an account, select your role, and set up your profile.
                                </Typography>
                        </CardContent>
                </Card>
                </Box>
                </div>
        </div>
        );
}

export default Features