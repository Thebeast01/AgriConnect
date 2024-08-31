import React, { useReducer } from 'react'

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/AgreeConnect.png';
import zIndex from '@mui/material/styles/zIndex';
const Navbar = () => {

        return (
                <AppBar
                        position='static'
                        sx={{
                                backgroundColor: 'white',
                                boxShadow: 'none',
                        }}
                >
                        <Box
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
                                        <NavLink to='home' underline='hover' color='black' >
                                                Home
                                        </NavLink>
                                        <Link to="feature"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                                style={{ cursor: "pointer", color: " black" }}


                                        >Features</Link>
                                        <Link to="how-it-works" spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                                style={{ cursor: "pointer", color: " black" }}

                                        >How It Works</Link>
                                        <Link to="about" spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                                style={{ cursor: "pointer", color: " black" }}

                                        >About Us</Link>
                                        <Link to="contact" spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                                style={{ cursor: "pointer", color: " black" }}

                                        >Contact Us</Link>
                                </div>
                        </Box>
                </AppBar>
        )
}

export default Navbar
