import { Avatar, Box, Container, Typography } from '@mui/material'
import React, { RefObject } from 'react';

import s1 from '../../public/images/sss.jpeg'
import Image from 'next/image';
import { Rotate90DegreesCcw } from '@mui/icons-material';
import { ClassNames } from '@emotion/react';
import { url } from 'inspector';



let services = [{
    name: 'Construction',
    image: s1,

}, {
    name: 'Interior-design',
    image: s1,

}, {
    name: 'Transporting',
    image: s1,

}, {
    name: 'Mechanics',
    image: s1,

},
{
    name: 'Designs',
    image: s1,

}]

interface Servicesprops {
    servicesref: RefObject<HTMLDivElement>;
}

const OurServices: React.FC<Servicesprops> = ({ servicesref }) => {
    return (
        <Box sx={{
            backgroundColor: '#F8F8F8',
            paddingBottom: '50px',

        }}>

            <Container ref={servicesref}>
                <Typography sx={{
                    fontSize: '40px',
                    fontWeight: 'bold',
                    fontFamily: 'Roboto',

                    marginBottom: '50px'
                }}>
                    Our Services
                </Typography>
                <Container sx={{

                    display: { sm: 'block', md: 'flex' },
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',


                }}>

                    {
                        services.map((item) => {
                            return <Container sx={
                                {
                                    position: 'relative',

                                    borderRadius: '50%',
                                    width: '250px',
                                    marginTop: '10px',

                                    height: '250px'


                                }
                            } className='bgcx'>


                                <Image src={item.image} alt={item.name} style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'fill',
                                    marginTop: '25px',
                                    borderRadius: '50%',


                                }}

                                    className='service-img' />
                                <Container sx={
                                    {
                                        position: 'absolute',

                                        top: {
                                            xs: '0px',
                                            sm: '0px', md: '25px'
                                        }, left: '20px',
                                        borderRadius: '50%',
                                        width: '210px',
                                        height: '200px',
                                        backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(100, 100, 100, 0.73))`




                                    }

                                } className='bg-color'></Container>


                                <Typography sx={{
                                    position: 'absolute',
                                    top: {
                                        xs: '30%',
                                        sm: '30%',
                                        md: '40%',


                                    },
                                    left: '20%',
                                    fontSize: '25px',
                                    textAlign: 'center',
                                    width: '150px',
                                    wordWrap: 'break-word',
                                    color: 'white',
                                    fontFamily: 'Roboto',
                                    overflowWrap: 'break-word',

                                    hyphens: 'manual',

                                }} className='txt'>
                                    {
                                        item.name
                                    }
                                </Typography>

                                <Container sx={
                                    {
                                        position: 'absolute',
                                        top: '90px',
                                        left: '-20px',
                                        borderRadius: '50%',
                                        width: '200px',
                                        height: '200px',
                                        backgroundColor: 'rgba(100, 100, 100, 0.73)',
                                        display: 'none'




                                    }

                                } className='show'>
                                    <Typography sx={{
                                        position: 'absolute',
                                        top: '30%',
                                        left: '10%',
                                        fontSize: '25px',
                                        textAlign: 'center',
                                        width: '150px',
                                        wordWrap: 'break-word',
                                        color: 'white',
                                        overflowWrap: 'break-word',
                                        fontFamily: 'Roboto',
                                        hyphens: 'manual',


                                    }} className='txt'>
                                        {
                                            item.name
                                        }
                                    </Typography>
                                </Container>
                            </Container>
                        })
                    }
                </Container>
            </Container>

        </Box >
    )
}
export default OurServices;