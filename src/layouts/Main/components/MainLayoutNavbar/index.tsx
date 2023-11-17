'use client';

import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Container,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
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
                        <Typography
                            variant="h1"
                            component="div"
                            fontFamily="Agbalumo"
                            flexGrow={1}
                        >
                            LensShot
                        </Typography>
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
