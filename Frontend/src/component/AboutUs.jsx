import { Box, Button, Typography } from "@mui/material";
import img1 from '../assets/waw-img.jpg'

const AboutUs = () => {
  return (

          <div 
            style={{ 
                width: '100%',
                borderTop: '1px solid #999',
                boxShadow: ' 2px -5px 10px rgba(0,0,0,0.2)',
                }}>
                <Typography variant="heading"
                sx={{
                     width: '100%',
                     height: '5rem',
                     fontSize: '2rem',
                     fontWeight:'bold',
                     display: 'flex',
                     justifyContent: 'center',
                     marginTop: '4rem',
                     marginBottom: '5rem'
                }}>
                        Who Are We
                </Typography>
                <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: '0 2rem',
                        mb: '5rem'
                }}>
                        <Box sx={{
                                flex: 1,
                                height: '25rem',
                                background: `url(${img1})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                margin: '0 1rem',

                        }} />
                       <Box sx={{
                        flex: 1,
                        }}>
                        <Typography variant="body1" color="textSecondary" component="p"
                        sx={{ 
                                fontSize: '1.2rem',
                        }}>
                         AgriConnect, we're on a mission to revolutionize the agricultural sector by bridging the gap between farmers and buyers. Our platform is designed to empower farmers with guaranteed market access through a seamless, contract-based farming system. By leveraging advanced technology like AI and blockchain, we provide farmers with the tools they need to secure stable incomes and optimize their farming practices. We believe in a future where every farmer has access to fair pricing, reliable buyers, and the resources to thrive in an increasingly competitive market.
                        </Typography>
                        <Button variant="contained" color="primary" sx={{ mt: 2, backgroundColor: '#47652F', borderRadius: '0.5rem' }}>
                        Read More
                        </Button>
                        </Box>
                </Box>
          </div>
  )
}

export default AboutUs
