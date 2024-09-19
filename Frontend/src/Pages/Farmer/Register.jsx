import React, { useState } from 'react';
import { Button, Box, Radio, RadioGroup, FormControlLabel, Container, TextField, Typography, createTheme, ThemeProvider, FormControl, FormLabel } from '@mui/material';
import { auth, db } from '../../component/Firebase';
import { useNavigate } from 'react-router-dom';
// Not completed Yet
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import dayjs from 'dayjs';

const Register = () => {
        const navigate = useNavigate()
        const [registerData, setRegisterData] = useState({
                fullname: '',
                date: '',
                phone: '',
                email: '',
                gender: '',
                password: '',

        })
        let date = Date();
        const [dateValue, setDateValue] = useState(dayjs(date));
        const handleSignup = async (e) => {
                e.preventDefault()
                try {
                        await createUserWithEmailAndPassword(auth, registerData.email, registerData.password, registerData.fullname, dateValue.$d, registerData.phone);
                        const user = auth.currentUser;
                        console.log(user)
                        if (user) {
                                await setDoc(doc(db, 'Users', user.uid), {
                                        fullname: registerData.fullname,
                                        date: dateValue.$d,
                                        phone: registerData.phone,
                                        email: registerData.email,
                                        gender: registerData.gender
                                })
                        }
                        Swal.fire('Register Successfully', '', 'success')
                        navigate('/dashboard')
                        console.log('Register Successfully')
                        console.log()
                }
                catch (error) {
                        console.log(error)
                        Swal.fire('Register Failed', error.message, 'error')
                }
        };

        console.log('Current Date', registerData)


        const theme = createTheme({
                components: {
                        MuiTextField: {
                                styleOverrides: {
                                        root: {
                                                backgroundColor: 'white',
                                        }
                                }
                        },

                }
        })
        return (
                <ThemeProvider theme={theme}>
                        <Container maxWidth='xl' sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '80vh',
                                flexDirection: 'column',

                        }}>
                                <Box width={'500px'} marginBottom={'3rem'} marginTop={'1rem'}>
                                        <Typography variant="h2" textAlign={'center'}>Join Us</Typography>

                                </Box>
                                <Box
                                        padding={'2rem'}
                                        boxShadow={3}
                                        borderRadius={2}
                                        sx={{ width: '500px', backgroundImage: 'linear-gradient(to right, #D7E2D8, #A3C1A5)' }}
                                >

                                        <Box display={'flex'} gap={'1rem'}>
                                                <TextField
                                                        label="Full Name"
                                                        type="text"
                                                        value={registerData.fname}
                                                        onChange={(e) => setRegisterData({ ...registerData, fullname: e.target.value })}
                                                        fullWidth

                                                />
                                        </Box>


                                        <Box display={'flex'} gap={'1rem'}>
                                                <TextField
                                                        label="Email"
                                                        type="email"
                                                        value={registerData.email}
                                                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                                                        fullWidth
                                                        margin="normal"
                                                />
                                        </Box>

                                        <TextField
                                                label="Password"
                                                type="password"
                                                value={registerData.password}
                                                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                                                fullWidth
                                                margin="normal"
                                        />
                                        <Box display={'flex'} width={'100%'} justifyContent={'space-between'} marginTop={'1rem'}>
                                                <Button variant='contained' sx={{ width: '7rem' }} onClick={() => navigate('/login')}>Login</Button>
                                                <Button variant='contained' color='warning' onClick={handleSignup}>Submit</Button>
                                        </Box>

                                </Box >
                        </Container >
                </ThemeProvider >
        );
};
export default Register