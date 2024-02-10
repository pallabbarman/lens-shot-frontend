import Avatar from '@/components/Avatar';
import { cssColor } from '@/utils/color';
import {
    AppBar,
    Box,
    Container,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
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
                        <Tooltip title="Account settings">
                            <IconButton
                                size="small"
                                sx={{ ml: 2 }}
                                // aria-controls={
                                //     open ? 'account-menu' : undefined
                                // }
                                aria-haspopup="true"
                                // aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar name="Pallab Barman" />
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </Container>
            </AppBar>
            {children}
        </>
    );
};

export default DashboardLayout;
