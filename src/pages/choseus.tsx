import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function ChooseUs() {
    return (
        <Box className='bg-white'>
            <Container>
                <Typography className='text-xl'>
                    Why Choose Us
                </Typography>
                <Container className='flex'>
                    <Container className='border-r-2'>
                        <Container className='border-b-2' >
                            <Container className='flex'>
                                <Typography>01</Typography>
                                <Typography>The Best Price</Typography>

                            </Container>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati incidunt accusamus dolorem molestiae ab
                            </Typography>
                        </Container>
                        <Container>
                            2
                        </Container><Container>
                            <Container className='flex'>
                                <Typography>01</Typography>
                                <Typography>The Best Price</Typography>

                            </Container>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati incidunt accusamus dolorem molestiae ab
                            </Typography>
                        </Container>
                    </Container>
                    <Container>
                        <Container>
                            1
                        </Container>
                        <Container>
                            2
                        </Container>
                    </Container>

                </Container>
            </Container>
        </Box>
    )
}
