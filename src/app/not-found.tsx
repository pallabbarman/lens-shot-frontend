import notFound from '@/assets/not-found.svg';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Box width={300} height={350} position="relative">
                <Image src={notFound} alt="not-found" fill />
            </Box>
            <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                gap={3}
            >
                <Typography variant="text3" color="textSecondary">
                    Sorry, the page you visited does not exist.
                </Typography>
                <Button LinkComponent={Link} href="/">
                    Back home
                </Button>
            </Box>
        </Box>
    );
};

export default NotFoundPage;
