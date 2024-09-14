import React, { useState } from 'react';
import { Button, Box, Container, TextField, Typography } from '@mui/material';
import { auth } from '../../component/Firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// Not completed Yet
import { GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';
const Login = () => {
        const navigate = useNavigate()
        const [loginData, setLoginData] = useState({
                email: '',
                password: ''
        })
        const handleLogin = async () => {
                if (loginData.email !== '' || loginData.password !== '') {
                try {
                        await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
                        Swal.fire('Login Success', '', 'success')
                        if (auth.currentUser) {
                                navigate('/dashboard')
                        }
                        console.log('Login Successfully')
                }
                catch (error) {
                        console.log(error)
                }
                }
                else {
                        Swal.fire('Login Failed', 'Please fill all the fields', 'error')
                }
        };
        const handleGoogleLogin = async () => {
                const provider = new GoogleAuthProvider();
                return signInWithPopup(auth, provider)

        }
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
                                sx={{ backgroundImage: 'linear-gradient(to right, #D7E2D8, #A3C1A5)' }}

                        >
                                <Typography variant="h4" textAlign={'center'}>Login</Typography>

                                <TextField
                                        label="Email"
                                        type="email"
                                        value={loginData.email}
                                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                        fullWidth
                                        margin="normal"
                                        backgroundColor='white'
                                />
                                <TextField
                                        label="Password"
                                        type="password"
                                        value={loginData.password}
                                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                        fullWidth
                                        margin="normal"
                                        backgroundColor='white'
                                />
                                <Box display={'flex'} width={'100%'} justifyContent={'space-between'} marginTop={'1rem'}>
                                        <Button variant='contained' onClick={() => navigate('/register')}>Register</Button>
                                        <Button variant='contained' color='warning' onClick={handleLogin}>Login</Button>

                                </Box>
                                <Button onClick={handleGoogleLogin} variant='contained' sx={{ width: '100%', marginTop: 2, borderRadius: 2, fontWeight: 'bold', color: 'white' }}>
                                        Sign In With Google
                                </Button>
                        </Box>
                </Container>
        );
};

export default Login;