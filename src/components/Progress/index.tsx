import { Box, CircularProgress } from '@mui/material';

const Progress = () => {
    return (
        <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress />
        </Box>
    );
};

export default Progress;
