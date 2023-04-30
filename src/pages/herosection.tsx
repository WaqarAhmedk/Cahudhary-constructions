import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react';
import HeroIMage from '../../public/images/herosection.webp'
import Image from 'next/image';

export default function HeroSectiopn() {
    return (
        <Grid sx={{
            marginTop: '30px'
        }}>
            <Container sx={{
                display: {
                    xs: 'block',
                    md: 'flex',
                },
                marginBottom: '20px',

            }}  >
                <Container className='hero-build-dream '>
                    BUILD YOUR DREAM PROPERTY WITH NEW EXPIRENCE
                </Container>
                <Container sx={{
                    marginLeft: '20px',
                    marginTop: '20px'
                }}>
                    <Typography sx={{
                        fontSize: '20px',
                        color: 'white',
                        fontWeight: 'bold',
                        marginBottom: '10px'
                    }} >
                        About us
                    </Typography>
                    <Typography sx={{
                        color: 'gray',
                        fontSize: '20px',
                        textAlign: 'start',
                        paddingRight: '7%',
                        marginBottom: '10px',
                    }} >
                        Drive performance and your cross-functional collabarations with easy-to-use dashboards and other ansd addd csadospadsakdw
                    </Typography>
                    <Container>
                        <Typography sx={{
                            fontSize: '20px',
                            color: 'white',
                            fontWeight: 'bold',
                            marginBottom: '5px'
                        }} >
                            350+projects
                        </Typography>

                    </Container>
                </Container>
            </Container>


            <Container className='mb-5 mt-5'>
                <Image src={HeroIMage} alt='herosection image' className='hero-img' />
            </Container>
        </Grid>
    )
}
