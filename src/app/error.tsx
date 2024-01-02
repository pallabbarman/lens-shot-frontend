'use client';

import error from '@/assets/server-error.svg';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const ErrorPage = () => {
    return (
        <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Box width={300} height={350} position="relative">
                <Image src={error} alt="error" fill />
            </Box>
            <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                gap={3}
            >
                <Typography variant="text3" color="textSecondary">
                    Sorry, something went wrong. Please try again!
                </Typography>
                <Button
                    LinkComponent={Link}
                    href="/"
                    // sx={{ color: cssColor('stormgrey') }}
                >
                    Back home
                </Button>
            </Box>
        </Box>
    );
};

export default ErrorPage;
