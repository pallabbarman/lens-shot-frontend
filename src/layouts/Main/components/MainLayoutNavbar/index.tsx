'use client';

import { cssColor } from '@/utils/color';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Container,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import MainLayoutMenu from '../MainLayoutMenu';

const MainLayoutNavbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(true);
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    return (
        <>
            <AppBar
                position="static"
                sx={{ backgroundColor: 'white', color: 'black' }}
            >
                <Container maxWidth="xl">
                    <Toolbar>
                        <Box flexGrow={1}>
                            <Link
                                href="/"
                                style={{
                                    color: cssColor('richblack'),
                                    textDecoration: 'none',
                                }}
                            >
                                <Typography variant="h1" fontFamily="Agbalumo">
                                    LensShot
                                </Typography>
                            </Link>
                        </Box>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleOpenMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <MainLayoutMenu open={openMenu} onClose={handleCloseMenu} />
        </>
    );
};

export default MainLayoutNavbar;
