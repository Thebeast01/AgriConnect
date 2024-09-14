import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import broccoli from '../../assets/broccoli.png';
import { Box, Typography, Card, CardContent, Button, Container } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '@mui/material/Modal';
const CarouselComponent = () => {
        const [isModalOpen, setIsModalOpen] = useState(false)
        const [selectedItem, setSelectedItem] = useState('')
        const data = [
                {
                        index: 0,
                        img: broccoli,
                        name: 'Broccoli',
                        price: '50',
                        quantity: '200 kg',
                        quality: 'A'
                },

                {
                        index: 1,
                        img: broccoli,
                        name: 'Potato',
                        price: '60',
                        quantity: '140 kg',

                        quality: 'A'
                },
                {
                        index: 2,
                        img: '',

                        name: 'Wheat',
                        price: '60',
                        quantity: '300 kg',

                        quality: 'A'
                },
                {
                        index: 3,
                        img: '',
                        name: 'Sugar Cane',
                        price: '100',
                        quantity: '100 kg',
                },
                {
                        index: 4,
                        img: '',
                        name: 'Corn',
                        price: '100',
                        quantity: '100 kg',
                },
                {
                        index: 5,
                        img: '',
                        price: '100',
                        quantity: '100 kg',
                },
                {
                        index: 6,
                        img: '',
                        price: '100',
                        quantity: '100 kg',
                },
                {
                        index: 7,
                        img: '',
                        price: '100',
                        quantity: '100 kg',
                },
                {
                        index: 8,
                        img: '',
                        price: '100',
                        quantity: '100 kg',
                },
                {
                        index: 9,
                        img: '',
                        price: '100',
                        quantity: '100 kg',
                },
                {
                        index: 10,
                        img: '',
                        price: '',
                        quantity: '',
                },
        ];
        const length = data.length;
        console.log(length);
        const handleOpen = (items) => {
                setIsModalOpen(true)
                setSelectedItem(items)
                console.log(items)
        }
        const handleClose = () => {
                setIsModalOpen(false)
        }
        return (
                <Container sx={{ overflow: 'hidden' }}>
                        <div style={{ height: 250, width: 1000, padding: 3, display: 'flex', alignItems: 'center', gap: 10, overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
                                {
                                        data.map((items) => (
                                                <Card sx={{
                                                        height: 250,
                                                        minWidth: 250,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'

                                                }} onClick={() => handleOpen(items)}
                                                >
                                                        <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                                                <img src={items.img} alt="" style={{ borderRadius: '2rem', objectFit: "cover" }} />
                                                                <Typography><span style={{ fontWeight: 'bold' }}>Product Name:</span> {items.name}</Typography>
                                                                <Typography> <span style={{ fontWeight: 'bold' }}>Crop Price :</span> {items.price}</Typography>
                                                                <Typography> <span style={{ fontWeight: 'bold' }}>Quantity:</span>{items.quantity}</Typography>
                                                        </CardContent>


                                                </Card>
                                        ))
                                }
                        </div>
                        <Modal sx={{
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'transparent'
                        }}
                                open={isModalOpen}

                                onClose={handleClose}

                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                        >
                                <Card
                                        sx={{
                                                height: 400,
                                                width: 300,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                borderRadius: 3,
                                                gap: 3,
                                                padding: 4

                                        }}
                                >

                                        {selectedItem.img ? (<img src={selectedItem?.img} alt="" />) : <p style={{ textAlign: 'center', fontWeight: 'bold' }}>No Image Available</p>}

                                        <p>Crop Name: <span style={{ fontWeight: 'bold' }}>{selectedItem?.name || "Not Available"}</span></p>
                                        <p>Quantity Ordered:{selectedItem?.quantity} </p>
                                        <p>Quality Standards:{selectedItem?.quality} </p>

                                        <Box width={'100%'} display={'flex'} justifyContent={'space-around'}>
                                                <Button variant='contained'> Edit</Button>
                                                <Button variant='contained'> Confirm</Button>
                                        </Box>
                                </Card>
                        </Modal>
                </Container>
        );
};

export default CarouselComponent;
