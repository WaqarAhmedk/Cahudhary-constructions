import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react';
import LogoImage from '../../public/images/logo.png'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
export default function NavBar({ ScrolltoView }) {
    const pages = ['Projects', 'Features', 'Services', 'Aboutus'];

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (





        <AppBar sx={{
            bgcolor: 'transparent',
            display: 'flex',
            borderBottom: '2px solid gray',
            position: 'relative'

        }}  >
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} >
                                <Typography

                                    textAlign="center" onClick={() => {
                                        if (page == 'Projects') {
                                            ScrolltoView('projects');

                                        } else if (page == 'Features') {
                                            ScrolltoView('features')

                                        } else if (page == 'Services') {
                                            ScrolltoView('services')

                                        } else if (page == 'Aboutus') {
                                            ScrolltoView('aboutus')

                                        }
                                        handleCloseNavMenu()


                                    }}>{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Container sx={{
                    flexGrow: 1, display: { xs: 'none', md: 'flex' }, width: '10px'
                }}>
                    <Container sx={{
                        display: 'flex',
                        justifyContent: 'Space-between',
                        width: '30%'
                    }}>
                        <Typography sx={{
                            cursor: 'pointer',
                            ":hover": {
                                color: 'blue'
                            }
                        }} color={'#BCC0C3'} onClick={() => {
                            ScrolltoView('aboutus')
                        }}>
                            About us
                        </Typography>
                        <Typography sx={{
                            cursor: 'pointer',
                            ":hover": {
                                color: 'blue'
                            }
                        }} color={'#BCC0C3'} onClick={() => {
                            ScrolltoView('projects')
                        }}>
                            Projects
                        </Typography>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }} >
                        <Image src={LogoImage} alt='chaudghary-construction logo' className='logoimg' />
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '30%',
                    }}>
                        <Typography sx={{
                            cursor: 'pointer',
                            ":hover": {
                                color: 'blue'
                            }
                        }} color={'#BCC0C3'} onClick={() => {
                            ScrolltoView('features')
                        }}>
                            Features
                        </Typography>
                        <Typography sx={{
                            cursor: 'pointer',
                            ":hover": {
                                color: 'blue'
                            }
                        }} color={'#BCC0C3'} onClick={() => {
                            ScrolltoView('services')
                        }}>
                            Services
                        </Typography>
                    </Container>
                </Container>

                <Container sx={{
                    marginLeft: '10px',
                    display: { xs: 'flex', sm: 'flex', md: 'none' }
                }}>
                    <Image src={LogoImage} alt='chaudghary-construction logo' className='logoimg' />
                    <Typography sx={{
                        cursor: 'pointer',
                        ":hover": {
                            color: 'blue'
                        }
                    }}>
                        Chaudhary  Construction Group
                    </Typography>
                </Container>
            </Toolbar>

        </AppBar>)
}
