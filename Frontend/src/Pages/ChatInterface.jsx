import React, { useState } from 'react';
import {
        Box,
        Button,
        Card,
        CardContent,
        CardHeader,
        CardMedia,
        Container,
        Grid,
        List,
        ListItem,
        ListItemAvatar,
        ListItemText,
        Modal,
        TextField,
        Typography,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCaretDown, faPhone, faPaperclip, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Colors } from '../Colors';
import Ai from '../assets/ai.png';
const ChatInterface = () => {
        const [isOpen, setIsOpen] = useState(false);
        const data = [
                {
                        image: '',
                        name: 'John Doe',
                },
                {
                        image: '',
                        name: 'King Kong',
                },
                {
                        image: '',
                        name: 'Alvin',
                },
                {
                        image: '',
                        name: 'Ron',
                },
                {
                        image: '',
                        name: 'Clat',
                }, {
                        image: '',
                        name: 'Stacy',
                }, {
                        image: '',
                        name: 'Ruby',
                }, {
                        image: '',
                        name: 'Doe',
                },
        ];
        const handleOpen = () => {
                setIsOpen(true);
        }
        const handleClose = () => {
                setIsOpen(false);
        }
        return (
                <Container maxWidth={'xl'} sx={{ backgroundColor: '#E5EBE6', borderRadius: 5, overflow: 'hidden', padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>



                        <Grid container sx={{ marginTop: '20px', height: '100%', display: 'flex ', gap: 2 }}>
                                <Grid
                                        item
                                        xs={12}
                                        md={3}
                                        sx={{
                                                backgroundColor: '#D1DCD2',
                                                height: '100%',
                                                width: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: 2,
                                                borderRadius: 5,
                                        }}
                                >
                                        <Box
                                                sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        width: '100%',
                                                        height: '100%',
                                                        padding: 4,
                                                        boxShadow: 4,
                                                        borderRadius: 5,
                                                }}
                                        >
                                                <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>
                                                        All Messages <FontAwesomeIcon icon={faCaretDown} />
                                                </Typography>

                                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '100%', marginTop: '1rem' }}>
                                                <List sx={{ width: '100%', gap: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                                        {data.map((item, index) => (
                                                                <ListItem key={index} sx={{ padding: 2, boxShadow: 3, width: '100%', borderRadius: 3 }}>
                                                                        <ListItemAvatar>
                                                                                <Avatar alt='Remy Sharp' src={item.image} />
                                                                        </ListItemAvatar>
                                                                        <ListItemText primary={item.name} />
                                                                        <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '24px' }} />
                                                                </ListItem>
                                                        ))}
                                                </List>
                                        </Box>
                                </Grid>
                                <Grid
                                        item
                                        xs={12}
                                        md={5.7}
                                        sx={{
                                                backgroundColor: '#D1DCD2',
                                                borderRadius: 5,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                padding: 2,
                                        }}
                                >
                                        <Box
                                                sx={{
                                                        backgroundColor: 'white',
                                                        borderRadius: 5,
                                                        overflow: 'hidden',
                                                }}
                                        >
                                                <Box
                                                        sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 2,
                                                                padding: 2,
                                                                justifyContent: 'space-between',
                                                        }}
                                                >
                                                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                                                {' '}
                                                                <Avatar alt='Profile' />
                                                                <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>UserName</Typography>
                                                        </Box>
                                                        <Box sx={{
                                                                backgroundColor: '#E8E9F6',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 2,
                                                                padding: 2,
                                                                borderRadius: 3
                                                        }}>
                                                                <FontAwesomeIcon icon={faPhone} color='#33B039' size="xl" />
                                                                <Typography sx={{
                                                                        fontSize: 20,
                                                                        color: '#33B039'

                                                                }}>Call</Typography>
                                                        </Box>
                                                </Box>
                                                <Box>
                                                        <Card sx={{ borderRadius: 5, padding: 2, overflowY: 'auto' }}>
                                                                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                                        <Avatar alt='profile' />
                                                                        <Typography sx={{ backgroundColor: '#F1F1F1', color: 'black', paddingTop: 1, borderRadius: 4, paddingBottom: 1, paddingX: 4 }}

                                                                        >Lorem, ipsum dolor.</Typography>
                                                                </CardContent>
                                                                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                                        <Avatar alt='profile' />
                                                                        <Typography sx={{ backgroundColor: '#F1F1F1', color: 'black', paddingTop: 1, borderRadius: 4, paddingBottom: 1, paddingX: 4 }}

                                                                        >Lorem, ipsum dolor.</Typography>

                                                                </CardContent>
                                                                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'end' }}>
                                                                        <Typography sx={{ backgroundColor: '#2D8C31', color: 'white', paddingTop: 1, borderRadius: 4, paddingBottom: 1, paddingX: 4 }}

                                                                        >Lorem, ipsum dolor.</Typography>
                                                                        <Avatar alt='profile' />
                                                                </CardContent>
                                                                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'end', }}>
                                                                        <Typography sx={{ backgroundColor: '#2D8C31', color: 'white', paddingTop: 1, borderRadius: 4, paddingBottom: 1, paddingX: 4 }}

                                                                        >Lorem, ipsum dolor.</Typography>
                                                                        <Avatar alt='profile' />
                                                                </CardContent>
                                                                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'end', }}>
                                                                        <Typography sx={{ backgroundColor: '#2D8C31', color: 'white', paddingTop: 1, borderRadius: 4, paddingBottom: 1, paddingX: 4 }}

                                                                        >Lorem, ipsum dolor.</Typography>
                                                                        <Avatar alt='profile' />
                                                                </CardContent>

                                                                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'end', }}>
                                                                        <Typography sx={{ backgroundColor: '#2D8C31', color: 'white', paddingTop: 1, borderRadius: 4, paddingBottom: 1, paddingX: 4 }}

                                                                        >Lorem, ipsum dolor.</Typography>
                                                                        <Avatar alt='profile' />
                                                                </CardContent>


                                                        </Card>

                                                </Box>

                                        </Box>
                                        <Box sx={{
                                                display: 'flex',
                                                widht: '100%',
                                                justifyContent: 'space-between',
                                                marginTop: 2,


                                        }}>


                                                <Card sx={{ borderRadius: 4, width: '100%' }}>
                                                        <Typography textAlign={'center'} marginTop={1} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={1}>
                                                                <img src={Ai} alt="" />
                                                                Ai Dynamic Price Suggestion</Typography>
                                                        <CardContent sx={{ fontWeight: 'bold' }}>
                                                                <Typography sx={{ fontWeight: 'bold' }}>
                                                                        Trending Market Price of the Crop:

                                                                </Typography >
                                                                <Typography sx={{ fontWeight: 'bold' }}>
                                                                        MSP of the Crop:
                                                                </Typography>
                                                                <Typography sx={{ fontWeight: 'bold' }}>
                                                                        AI Suggestion :
                                                                </Typography>




                                                        </CardContent>
                                                </Card>
                                        </Box>


                                        <TextField sx={{ backgroundColor: 'white', color: 'black', width: '100%', outline: 'none', borderRadius: 3, marginTop: 2 }} label='Talk To buyer' >

                                        </TextField>

                                        <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: 1,
                                        }}>
                                                <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '10px' }}>  <FontAwesomeIcon icon={faPaperclip} size='xl' /></div>
                                                <Button variant='contained' sx={{ backgroundColor: 'white', color: 'black', }}
                                                        onClick={handleOpen}>Custom Offer</Button>

                                        </Box>
                                </Grid>

                                <Grid item xs={12} md={3}
                                        sx={{
                                                backgroundColor: '#D1DCD2',
                                                borderRadius: 5,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                padding: 2,
                                                width: '100%'
                                        }}>
                                        <Card>
                                                <CardContent sx={{
                                                        backgroundColor: '#AECCB1',
                                                        display: 'flex',
                                                        alignItems: 'center',

                                                }}> <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Brand Detail</Typography></CardContent>
                                        </Card>
                                </Grid>
                        </Grid>
                        <Modal
                                open={isOpen}
                                onClose={handleClose}
                                aria-labelledby='modal-modal-title'
                                aria-describedby='modal-modal-description'
                                sx={{
                                        height: '100%',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                }}
                        >
                                <Box sx={{ backgroundColor: 'white', borderRadius: 5, padding: 2, display: 'flex', flexDirection: 'column', gap: 4, width: '400px' }}>
                                        <Box display={'flex'} flexDirection={'column'} >
                                                <Typography fontWeight={300} fontSize={18}>Quantity</Typography>
                                                <TextField variant='outlined' label='Enter Your Offer' />
                                        </Box>
                                        <Box display={'flex'} flexDirection={'column'} >
                                                <Typography fontWeight={300} fontSize={18}>Price</Typography>
                                                <TextField variant='outlined' label='Enter Your Price' />
                                        </Box>
                                        <Box display={'flex'} flexDirection={'column'} >
                                                <Typography fontWeight={300} fontSize={18}>Delivery Date</Typography>
                                                <TextField variant='outlined' label='Enter Date' />
                                        </Box>

                                        <Button variant='contained' sx={{ backgroundColor: '#2D8C31', display: 'flex', gap: 2 }}>Submit
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        </Button>
                                </Box>
                        </Modal>
                </Container>
        );
};

export default ChatInterface;
