import React from 'react'


import { AppBar, Toolbar, Link } from '@mui/material';

import logo from '../../public/assets/icons/AgreeConnect.png';
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
                                                fontSize: '18px',

                                }}
                        >
                                        <Link to='/home' underline='hover' color='black' >
                                        Home
                                </Link>
                                        <Link href='#Features' underline='hover' color='black'>
                                        Features
                                </Link>
                                        <Link href='#how-it-works' underline='hover' color='black'>
                                        How It Works
                                </Link>

                                        <Link href='#aboutUs' underline='hover' color='black'>
                                        About Us
                                </Link>

                                        <Link href='#contactUs' underline='hover' color='black'>
                                        Contact Us
                                </Link>
                        </div>
                </Toolbar>
        </AppBar>
        )
}

export default Navbar
