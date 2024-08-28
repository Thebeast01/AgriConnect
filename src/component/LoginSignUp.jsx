import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

// Not completed Yet


const LoginSignupForm = () => {

        const [isLoginMode, setIsLoginMode] = useState(false);
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleLogin = () => {
                console.log('Logging in with email:', email, 'and password:', password);
        };

        const handleSignup = () => {
                console.log('Signing up with email:', email, 'and password:', password);
        };

        const toggleMode = () => {
                setIsLoginMode(!isLoginMode);
        };

        return (
                <div >
                        <Typography variant="h4">{isLoginMode ? 'Login' : 'Signup'}</Typography>
                        <form onSubmit={isLoginMode ? handleLogin : handleSignup}>
                                <TextField
                                        label="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        fullWidth
                                        margin="normal"
                                />
                                <TextField
                                        label="Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        fullWidth
                                        margin="normal"
                                />
                                <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        fullWidth
                                        margin="normal"
                                >
                                        {isLoginMode ? 'Login' : 'Signup'}
                                </Button>
                                {isLoginMode ? (
                                        <Typography variant="body2" onClick={toggleMode}>
                                                Don't have an account? Signup
                                        </Typography>
                                ) : (
                                        <Typography variant="body2" onClick={toggleMode}>
                                                Already have an account? Login
                                        </Typography>
                                )}
                        </form>
                </div>
        );
};

export default LoginSignupForm;