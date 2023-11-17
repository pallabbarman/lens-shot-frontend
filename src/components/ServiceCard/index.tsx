import abc from '@/assets/1.jpg';
import { Box, Card, Divider, Typography } from '@mui/material';
import Image from 'next/image';

const ServiceCard = () => {
    return (
        <Card sx={{ width: 250, height: 380, position: 'relative' }}>
            <Image
                src={abc}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
            />
            <Box
                position="absolute"
                left={0}
                right={0}
                bottom={20}
                mx="auto"
                sx={{
                    transition: 'all 0.3s',
                    background:
                        'linear-gradient(to bottom, transparent 0, rgba(255, 255, 255, .01) 2%, rgba(255, 255, 255, .75) 90%)',
                }}
            >
                <Typography variant="subtitle1">Weeding</Typography>
                <Divider sx={{ width: 30 }} />
            </Box>
        </Card>
    );
};

export default ServiceCard;
