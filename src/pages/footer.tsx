import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

import img1 from '../../public/images/fb.png'
import img2 from '../../public/images/twitter.png'
import img3 from '../../public/images/whatsapp.png'
import Image from 'next/image'



export default function Footer() {
    return (<Box sx={{
        paddingTop: '30px',

    }}>

        <Container sx={{
            marginBottom: '20px'
        }}>
            <Box sx={{
                display: {
                    xs: 'block',
                    sm: 'flex',
                    md: 'flex'
                }
            }}>

                <Typography sx={{
                    fontFamily: 'Roboto',
                    fontSize: {
                        xs: '20px',
                        md: '45px',

                    },
                    color: ' white',
                    width: {
                        xs: '100%',
                        sm: '70%',
                        md: '60%'
                    },
                    paddingX: {
                        xs: '1%',
                        sm: '1%',
                        md: '5%'
                    }
                }}>
                    SO, WHAT ARE YOU WAITING FOR,
                    LETS TALK ABOUT YOUR PROJECT
                </Typography>

                <Box sx={{
                    display: 'flex',
                    marginTop: '20px'
                }}>

                    <Container>

                        <Box sx={{
                            borderRadius: '50%'
                        }}>
                            <TextField placeholder='Your Email' sx={{
                                backgroundColor: 'gray',
                                border: '1px solid white',
                                borderRadius: '30px'
                            }} />
                            <Button variant='contained' sx={{
                                height: '50px',
                                backgroundColor: 'red', marginLeft: '20px'
                            }}>
                                Contact us
                            </Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            marginTop: '50px'
                        }}>
                            <Image src={img1} alt='fb' style={{
                                width: '40px',
                                height: '40px',
                                marginRight: '10%'
                            }} />


                            <Image src={img3} alt='whatsapp' style={{
                                width: '50px', height: '50px'

                            }} />
                        </Box>
                    </Container>




                </Box>
            </Box>
        </Container>

        <hr />

        <Container sx={{
            display: 'flex',

        }}>
            <Box sx={{
                width: '20%'
            }}>
                <Typography>
                    Chaudhary Const
                </Typography>
                <Typography>
                    main road ratta  dadyal Azad Kashmir
                </Typography>
                <Typography>
                    email@gmail.com
                </Typography>
            </Box>
            <Box sx={{
                width: '20%'
            }}>
                <Typography>
                    Platform
                </Typography>
                <Typography>
                    analytics
                </Typography>
                <Typography>
                    planning
                </Typography>
                <Typography>
                    collabration
                </Typography>
                <Typography>
                    datamanagement
                </Typography>
            </Box>
            <Box sx={{
                width: '20%'
            }}>
                <Typography>
                    Platform
                </Typography>
                <Typography>
                    analytics
                </Typography>
                <Typography>
                    planning
                </Typography>
                <Typography>
                    collabration
                </Typography>
                <Typography>
                    datamanagement
                </Typography>
            </Box>
            <Box sx={{
                width: '20%'
            }}>
                <Typography>
                    Platform
                </Typography>
                <Typography>
                    analytics
                </Typography>
                <Typography>
                    planning
                </Typography>
                <Typography>
                    collabration
                </Typography>
                <Typography>
                    datamanagement
                </Typography>
            </Box>
            <Box sx={{
                width: '20%'
            }}>
                <Typography>
                    Platform
                </Typography>
                <Typography>
                    analytics
                </Typography>
                <Typography>
                    planning
                </Typography>
                <Typography>
                    collabration
                </Typography>
                <Typography>
                    datamanagement
                </Typography>
            </Box>
        </Container>
    </Box>)
}
