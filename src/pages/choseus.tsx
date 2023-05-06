import { Box, Container, Typography } from '@mui/material'
import React, { RefObject } from 'react'
interface ChooseusProps {
    featuresref: RefObject<HTMLDivElement>;
}

const ChooseUs: React.FC<ChooseusProps> = ({ featuresref }) => {
    return (
        <Box sx={{
            backgroundColor: 'white',
            paddingTop: '50px',
            paddingBottom: '50px'
        }} ref={featuresref} >
            <Container>
                <Typography sx={{
                    fontSize: '40px',
                    fontWeight: 'bold',
                    fontFamily: 'Roboto',

                    marginBottom: '50px'

                }}>
                    Why Choose Us
                </Typography>
                <Container sx={{
                    display: {
                        sm: 'block',
                        md: 'flex'
                    }
                }}>
                    <Container sx={{
                        borderRight: '1px solid #848484'
                    }} >
                        <Container sx={{
                            borderBottom: '1px solid #848484',
                            display: 'flex',
                            paddingBottom: '20px'
                        }}  >
                            <Typography sx={
                                {
                                    color: ' #848484',
                                    fontSize: '20px'
                                }
                            }>1</Typography>

                            <Container sx={{ marginBottom: '10px' }}>
                                <Typography sx={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    marginBottom: '5px'
                                }}>The Best Price</Typography>
                                <Typography sx={
                                    {
                                        color: ' #848484',
                                        fontSize: '15px'
                                    }
                                }>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati incidunt accusamus dolorem molestiae ab
                                </Typography>
                            </Container>

                        </Container>
                        <Container sx={{
                            display: 'flex',
                            paddingBottom: '20px',
                            marginTop: '20px'
                        }}  >
                            <Typography sx={
                                {
                                    color: ' #848484',
                                    fontSize: '20px'
                                }
                            }>2</Typography>

                            <Container sx={{ marginBottom: '10px' }}>
                                <Typography sx={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    marginBottom: '5px'
                                }}>Daily Constultant</Typography>
                                <Typography sx={
                                    {
                                        color: ' #848484',
                                        fontSize: '15px'
                                    }
                                }>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati incidunt accusamus dolorem molestiae ab
                                </Typography>
                            </Container>

                        </Container>





                    </Container>
                    <Container sx={{
                    }} >
                        <Container sx={{
                            borderBottom: '1px solid #848484',
                            display: 'flex',
                            paddingBottom: '20px'
                        }}  >
                            <Typography sx={
                                {
                                    color: ' #848484',
                                    fontSize: '20px'
                                }
                            }>3</Typography>

                            <Container sx={{ marginBottom: '10px' }}>
                                <Typography sx={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    marginBottom: '5px'
                                }}>Custom Design</Typography>
                                <Typography sx={
                                    {
                                        color: ' #848484',
                                        fontSize: '15px'
                                    }
                                }>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati incidunt accusamus dolorem molestiae ab
                                </Typography>
                            </Container>

                        </Container>
                        <Container sx={{
                            display: 'flex',
                            paddingBottom: '20px', marginTop: '20px'

                        }}  >
                            <Typography sx={
                                {
                                    color: ' #848484',
                                    fontSize: '20px'
                                }
                            }>4</Typography>

                            <Container sx={{ marginBottom: '10px' }}>
                                <Typography sx={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    marginBottom: '5px'
                                }}>Premium</Typography>
                                <Typography sx={
                                    {
                                        color: ' #848484',
                                        fontSize: '15px'
                                    }
                                }>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati incidunt accusamus dolorem molestiae ab
                                </Typography>
                            </Container>

                        </Container>





                    </Container>

                </Container>
            </Container>
        </Box >
    )
}
export default ChooseUs;