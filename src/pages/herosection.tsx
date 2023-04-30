import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react';
import HeroIMage from '../../public/images/herosection.webp'
import Image from 'next/image';

export default function HeroSectiopn() {
    return (
        <Grid className='mt-20'>
            <Container className='block  mb-10  sm:block  md:flex' >
                <Container className='hero-build-dream '>
                    BUILD YOUR DREAM PROPERTY WITH NEW EXPIRENCE
                </Container>
                <Container className='ml-10 mt-5'>
                    <Typography className='text-xl text-white font-bold mb-2'>
                        About us
                    </Typography>
                    <Typography className='text-gray-700 text-lg pr-5 text-start break-woords mb-3 '>
                        Drive performance and your cross-functional collabarations with easy-to-use dashboards and other ansd addd csadospadsakdw
                    </Typography>
                    <Container>
                        <Typography className='text-lg text-white font-bold mb-2'>
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
