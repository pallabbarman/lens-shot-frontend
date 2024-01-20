import { Box, CircularProgress, CircularProgressProps } from '@mui/material';

interface ProgressProps extends CircularProgressProps {
    fullHeight?: boolean;
}

const Progress = ({ fullHeight = true, ...props }: ProgressProps) => {
    return (
        <Box
            height={fullHeight ? '100vh' : 0}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress {...props} />
        </Box>
    );
};

export default Progress;
