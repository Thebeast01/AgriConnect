import { Box, Typography, Button } from '@mui/material'
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Features from './Features';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
        const navigate = useNavigate()
        return (
                <div style={{ height: '100%' }}>

                        <Box
                                sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        width: '100vw',
                                        height: '80vh',
                                        flex: 1,
                                        backgroundImage: 'url(../../public/assets/images/background-img3.jpg)',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                }}
                        >
                                <Box sx={{
                                        marginLeft: '10rem',
                                }}><Typography variant='h3' color='#fff'>
                                                Empowering Farmers with Guaranteed <br />Market Access.
                                        </Typography>
                                        <Typography variant='h5' align='left' color='#fff' marginTop={'1rem'} fontSize={'22px'} >
                                                Streamline your farming business with contract <br /> farming, AI-driven pricing, and transparent <br />transactions
                                        </Typography>


                                        <Box marginTop={'2rem'} flex={1}>

                                                <Button variant='contained' sx={{
                                                        backgroundImage: 'linear-gradient(to right, #35903A, #29772D)',
                                                        width: '17rem',
                                                        padding: '10px',
                                                        marginRight: '3rem'
                                                }} onClick={() => navigate('/register')} >Join as Farmer</Button>


                                                <Button variant='contained' sx={{
                                                        backgroundImage: 'linear-gradient(to right, #A15C1A, #875423)',
                                                        padding: '10px',
                                                        width: '17rem'
                                                }} >Join as Buyer</Button>
                                        </Box>
                                </Box>
                        </Box>
                        <Features />
                        <AboutUs />
                </div>
        );
}


export default LandingPage;