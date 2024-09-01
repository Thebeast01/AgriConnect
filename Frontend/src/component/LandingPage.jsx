import { Box, Container ,Typography, TextField, Button } from '@mui/material'
import AboutUs from './AboutUs';
import Features from './Features';
import { Link } from 'react-router-dom';
import bg1 from '../assets/background-img3.jpg';
import img1 from '../assets/arrow.png';
import HowItWorks from './HowItWorks';
function LandingPage() {
	return (
                <div style={{ height: '100vh' }}>

                        <Box
                                sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        width: '100vw',
                                        height: '80vh',
                                        flex: 1,
                                        backgroundImage: `url(${bg1})`,
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
                        <HowItWorks />
                        <AboutUs />
                        <Container sx={{
                                width: '100vw',
                                height: '35rem',
                                backgroundColor: '#4CAF50',
                                display: 'flex',
                                justifyContent: 'center',
                                mb: '4rem',
                        }} >
                               <Box sx={{
                                width: '100%',
                                height: '30rem',
                                padding: '2rem',
                                mt: '3rem',
                               }}>
                                <Box sx={{
                                        width: '100%',
                                        height: '15rem',
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(4,1fr)',
                                        columnGap: '1rem',
                                        mb: '2rem'
                                }}>
                                        <Box>
                                             <Typography variant='h4' color='primary'>Product</Typography>
                                             <Typography variant='h6'>Farmer's Database</Typography>
                                             <Typography variant='h6'>Marketing Insights</Typography>
                                             <Typography variant='h6'>Pricing</Typography>
                                             <Typography variant='h6'>Marketplace</Typography>
                                        </Box>
                                        <Box>
                                             <Typography variant='h4' color='primary'>Information</Typography>
                                             <Typography variant='h6'>FAQ</Typography>
                                             <Typography variant='h6'>Blog</Typography>
                                             <Typography variant='h6'>Support</Typography>
                                        </Box>
                                        <Box>
                                             <Typography variant='h4' color='primary'>Company</Typography>
                                             <Typography variant='h6'>About us</Typography>
                                             <Typography variant='h6'>Features</Typography>
                                             <Typography variant='h6'>How It Works</Typography>
                                             <Typography variant='h6'>Contact Us</Typography>
                                        </Box>
                                        <Box>
                                        <Typography
                                         variant="body1" color="primary">
                                        Subscribe
                                        </Typography>
                                        <form style={{ display: 'flex', alignItems: 'center' }}>
                                                <TextField id="email" label="Email" variant="outlined"
                                                sx={{
                                                        width: '100%',
                                                        height: '4rem',
                                                }}/>
                                                <Button variant="contained"
                                                sx={{
                                                        width: '3rem',
                                                        height: '3.5rem',
                                                        background: `url(${img1})`,
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center',
                                                        backgroundColor: '#C6850C',
                                                        border: 'none',
                                                        borderRadius: '0.5rem',
                                                        ml: '-3.9rem',
                                                        mt: '-0.7rem',
                                                        boxShadow: 'none'
                                                }} />
                                        </form>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                                Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.
                                        </Typography>
                                        </Box>
                                </Box>
                                <Box sx={{
                                        width: '100%',
                                        height: '10rem',
                                        backgroundColor: 'white',
                                }}></Box>
                               </Box>
                        </Container>
                </div>
        );
}


export default LandingPage;