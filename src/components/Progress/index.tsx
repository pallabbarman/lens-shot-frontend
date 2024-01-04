import { Box, CircularProgress, CircularProgressProps } from '@mui/material';

type ProgressProps = CircularProgressProps;

const Progress = ({ ...props }: ProgressProps) => {
    return (
        <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress {...props} />
        </Box>
    );
};

export default Progress;
