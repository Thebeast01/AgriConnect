import React, { useState } from 'react';
import { Button, Box, ButtonGroup, Container, TextField, Typography } from '@mui/material';
import { auth, db } from './Firebase';
import { useNavigate } from 'react-router-dom';
// Not completed Yet
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';

export const Register = () => {
        const navigate = useNavigate()
        const [registerData, setRegisterData] = useState({
                fname: '',
                lname: '',
                phone: '',
                email: '',
                password: '',

        })

        const handleSignup = async (e) => {
                e.preventDefault()
                try {
                        await createUserWithEmailAndPassword(auth, registerData.email, registerData.password, registerData.fname, registerData.lname, registerData.phone);
                        const user = auth.currentUser;
                        console.log(user)
                        if (user) {
                                await setDoc(doc(db, 'Users', user.uid), {
                                        fname: registerData.fname,
                                        lname: registerData.lname,
                                        phone: registerData.phone,
                                        email: registerData.email,
                                })
                        }
                        Swal.fire('Register Successfully', '', 'success')
                        console.log('Register Successfully')
                }
                catch (error) {
                        console.log(error)
                        Swal.fire('Register Failed', error.message, 'error')
                }
        };



        return (
                <Container maxWidth='xl' sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '80vh',

                }}>
                        <Box width={'450px'}
                                padding={'1rem'}
                                boxShadow={3}
                                borderRadius={2}
                                sx={{ backgroundColor: 'white' }}
                        >
                                <Typography variant="h4" textAlign={'center'}>Register</Typography>

                                <TextField
                                        label="First Name"
                                        type="text"
                                        value={registerData.fname}
                                        onChange={(e) => setRegisterData({ ...registerData, fname: e.target.value })}
                                        fullWidth
                                        margin="normal"
                                /><TextField
                                        label="Last Name"
                                        type="text"
                                        value={registerData.lname}
                                        onChange={(e) => setRegisterData({ ...registerData, lname: e.target.value })}
                                        fullWidth
                                        margin="normal"
                                /><TextField
                                        label="Phone Number"
                                        type="text"
                                        value={registerData.phone}
                                        onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                                        fullWidth
                                        margin="normal"
                                /><TextField
                                        label="email"
                                        type="email"
                                        value={registerData.email}
                                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                                        fullWidth
                                        margin="normal"
                                />
                                <TextField
                                        label="Password"
                                        type="password"
                                        value={registerData.password}
                                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                                        fullWidth
                                        margin="normal"
                                />
                                <Box display={'flex'} width={'100%'} justifyContent={'space-between'} marginTop={'1rem'}>
                                        <Button variant='contained' onClick={() => navigate('/login')}>Login</Button>
                                        <Button variant='contained' color='warning' onClick={handleSignup}>Register</Button>
                                </Box>

                        </Box >
                </Container >
        );
};


