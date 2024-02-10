'use client';

import AccountMenu from '@/components/AccountMenu';
import MenuIcon from '@/icons/MenuIcon';
import { cssColor } from '@/utils/color';
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
                position="sticky"
                sx={{ backgroundColor: 'white', color: 'black' }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ px: '0px !important' }}>
                        <Box flexGrow={1}>
                            <Typography
                                variant="h1"
                                fontFamily="Agbalumo"
                                component={Link}
                                href="/"
                                color={cssColor('richblack')}
                                sx={{
                                    textDecoration: 'none',
                                }}
                            >
                                LensShot
                            </Typography>
                        </Box>
                        <AccountMenu title="Profile" name="Pallab barman" />
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
