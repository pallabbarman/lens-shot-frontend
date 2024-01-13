import { Box, Typography } from '@mui/material';

const Banner = () => {
    return (
        <Box
            mt={3}
            display="flex"
            alignItems="flex-end"
            justifyContent={{ xs: 'flex-end', sm: 'center' }}
            flexDirection="column"
            minHeight="calc(100vh - 64px)"
            sx={{
                backgroundImage: "url('/photo3.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Typography variant="h1">LensShot</Typography>
            <Typography
                variant="text2"
                textAlign="right"
                color="textSecondary"
                width={{ xs: '26ch', md: '100%' }}
            >
                Capture your favorite moments with us.
            </Typography>
        </Box>
    );
};

export default Banner;
