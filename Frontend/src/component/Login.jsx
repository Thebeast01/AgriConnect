import React, { useState } from 'react';
import { Button, Box, Container, TextField, Typography } from '@mui/material';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
// Not completed Yet
import Swal from 'sweetalert2';
export const Login = () => {
        const navigate = useNavigate()
        const [loginData, setLoginData] = useState({
                email: '',
                password: ''
        })
        const handleLogin = async () => {

                try {
                        await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
                        Swal.fire('Login Success', '', 'success')
                        if (auth.currentUser) {
                                navigate('/home')
                        }
                        console.log('Login Successfully')
                }
                catch (error) {
                        console.log(error)
                }
        };
        return (

                <Container maxWidth='xl' sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '80vh',
                        backgroundColor: '#FFFFFF'

                }}>
                        <Box width={'450px'}
                                padding={'1rem'}
                                boxShadow={3}
                                borderRadius={2}
                                sx={{ backgroundColor: 'white' }}
                        >
                                <Typography variant="h4" textAlign={'center'}>Login</Typography>

                                <TextField
                                        label="Email"
                                        type="email"
                                        value={loginData.email}
                                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                        fullWidth
                                        margin="normal"
                                />
                                <TextField
                                        label="Password"
                                        type="password"
                                        value={loginData.password}
                                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                        fullWidth
                                        margin="normal"
                                />
                                <Box display={'flex'} width={'100%'} justifyContent={'space-between'} marginTop={'1rem'}>
                                        <Button variant='contained' onClick={() => navigate('/register')}>Register</Button>
                                        <Button variant='contained' color='warning' onClick={handleLogin}>Login</Button>
                                </Box>
                        </Box>
                </Container>
        );
};

