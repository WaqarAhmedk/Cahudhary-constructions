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
export default function NavBar() {
    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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





        <AppBar className='bg-transparent flex justify-between border-gray-700 border-b-2 ' style={{
            position: 'relative'
        }}>
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
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Container className='w-10' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Container className='flex justify-between ' >
                        <Typography color={'#BCC0C3'}>
                            About
                        </Typography>
                        <Typography color={'#BCC0C3'}>
                            Projects
                        </Typography>
                    </Container>
                    <Container className='flex justify-center'>
                        <Image src={LogoImage} alt='chaudghary-construction logo' className='logoimg' />
                    </Container>
                    <Container className='flex justify-between '>
                        <Typography color={'#BCC0C3'}>
                            Features
                        </Typography>
                        <Typography color={'#BCC0C3'}>
                            Resources
                        </Typography>
                    </Container>
                </Container>

                <Container className='ml-5 ' sx={{
                    display: { xs: 'flex', sm: 'flex', md: 'none' }
                }}>
                    <Image src={LogoImage} alt='chaudghary-construction logo' className='logoimg' />
                    <Typography>
                        Chaudhary Group
                    </Typography>
                </Container>
            </Toolbar>

        </AppBar>)
}
