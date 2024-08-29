import React from 'react'


import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';

import logo from '../assets/AgreeConnect.png';
const Navbar = () => {
        return (
        <AppBar
                position='static'
                sx={{
                        backgroundColor: 'white',
                         boxShadow: 'none',
                }}
        >
                <Toolbar
                        sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                        }}
                >
                        <img src={logo} alt='AgreeConnect' style={{ width: '100px', height: '100px' }} />
                        <div
                                style={{
                                        width: '50%',
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        fontSize: '17px',

                                }}
                        >
                                <Link href='/home' underline='none' color='black'>
                                        Home
                                </Link>
                                <Link href='/Features' underline='none'color='black'>
                                        Features
                                </Link>
                                <Link href='/how-it-works' underline='none'color='black'>
                                        How It Works
                                </Link>

                                <Link href='/aboutUs' underline='none'color='black'>
                                        About Us
                                </Link>

                                <Link href='/contactUs' underline='none'color='black'>
                                        Contact Us
                                </Link>
                        </div>
                </Toolbar>
        </AppBar>
        )
}

export default Navbar
