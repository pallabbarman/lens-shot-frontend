import abc from '@/assets/1.jpg';
import { Box, Card, Divider, Typography } from '@mui/material';
import Image from 'next/image';

const ServiceItem = () => {
    return (
        <Card sx={{ width: 250, height: 380, position: 'relative' }}>
            <Box
                component={Image}
                src={abc}
                alt=""
                width="100%"
                height="100%"
                sx={{
                    transition: 'all 0.5s',
                    '&:hover': {
                        transform: 'scale(1.09, 1.09)',
                        transition: 'all 1s ease',
                        filter: 'brightness(100%)',
                    },
                }}
            />
            <Box
                position="absolute"
                left={0}
                right={0}
                bottom={20}
                mx="auto"
                sx={{
                    zIndex: 20,
                    transition: 'all 0.3s',
                    background:
                        'linear-gradient(to bottom, transparent 0, rgba(255, 255, 255, .01) 2%, rgba(255, 255, 255, .75) 90%)',
                    '&:hover': {
                        transition: 'all 1s ease',
                        filter: 'brightness(100%)',
                    },
                }}
            >
                <Typography variant="h2">Weeding Photography</Typography>
                <Divider sx={{ width: 30 }} />
            </Box>
        </Card>
    );
};

export default ServiceItem;
