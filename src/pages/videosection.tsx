import { Box } from '@mui/material'
import React from 'react'

export default function VideoSection() {
    return (
        <Box sx={{
            backgroundColor: 'white'
        }}>
            <video src={require('../../public/images/pexels-pressmaster-9034146-1920x1080-25fps.mp4')} muted autoPlay loop style={{
                height: '100%',
                width: '100%'
            }}>

            </video>
        </Box>
    )
}
