import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React, { RefObject } from 'react'
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { green } from '@mui/material/colors';
import { ArrowBackIosNewOutlined, ArrowBackIosNewRounded, ArrowForwardIosOutlined, ArrowRight, ArrowRightTwoTone } from '@mui/icons-material';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.pexels.com/photos/1694360/pexels-photo-1694360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];
interface Projectprops {
    projectsref: RefObject<HTMLDivElement>;
}


const Projects: React.FC<Projectprops> = ({ projectsref }) => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };


    return (
        <Box sx={
            {
                backgroundColor: 'white',
                position: 'relative',
                paddingBottom: '30px'
            }
        } >


            <Container
            >
                <Container sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{
                        fontSize: '40px',
                        fontWeight: 'bold',
                        fontFamily: 'Roboto',
                        marginTop: '20px',

                        marginBottom: '50px'
                    }}>
                        Some Completed Projects
                    </Typography>

                </Container>
                <Button
                    sx={{
                        position: {
                            sm: 'relative', md: 'absolute'
                        }, top: '50%',
                        left: '0%',


                    }}
                    size="large"
                    onClick={handleBack}
                    disabled={activeStep === 0}

                >
                    {theme.direction === 'rtl' ? (
                        <ArrowBackIosNewOutlined />
                    ) : <ArrowBackIosNewRounded />}
                </Button>
                <Button sx={{
                    position: {
                        sm: 'relative', md: 'absolute'
                    },
                    right: '0%',
                    top: '50%',



                }} size="small" onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    {theme.direction === 'rtl' ? (
                        <ArrowForwardIosOutlined />
                    ) : (
                        <ArrowForwardIosOutlined />

                    )}

                </Button>

                <Container ref={projectsref}>

                    <Box sx={{ maxWidth: '100%', flexGrow: 1, }}>
                        <Paper
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 50,
                                pl: 2,
                            }}
                        >
                            <Typography>{images[activeStep].label}</Typography>
                        </Paper>

                        <AutoPlaySwipeableViews

                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {images.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={{
                                                height: {
                                                    sm: '200px',
                                                    md: '500px'

                                                },
                                                borderBottomLeftRadius: '15%',
                                                WebkitBorderTopRightRadius: '15%',

                                                maxWidth: '100%',
                                                width: '100%'
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>

                    </Box>
                </Container>
            </Container>








        </Box >
    )
}





export default Projects;