'use client';

import AccountMenu from '@/components/AccountMenu';
import useAuth from '@/hooks/useAuth';
import MenuIcon from '@/icons/MenuIcon';
import { useGetProfileQuery } from '@/redux/features/profile';
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
    const auth = useAuth();
    const { data, isSuccess } = useGetProfileQuery(undefined);

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
                        {auth && isSuccess && data?.data && (
                            <AccountMenu
                                name={`${data.data.firstName} ${data.data.lastName}`}
                            />
                        )}
                        <IconButton
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
