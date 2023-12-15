import { Box, BoxProps, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface SectionTitleProps extends BoxProps {
    label?: ReactNode;
    children: ReactNode;
}

const SectionTitle = ({ label, children, ...props }: SectionTitleProps) => {
    return (
        <Box mb={5} textAlign="center" {...props}>
            <Typography
                mb={1}
                component="div"
                variant="text4"
                fontWeight={400}
                letterSpacing={5}
                color="textSecondary"
                textTransform="uppercase"
            >
                {label}
            </Typography>
            <Typography variant="h1" color="textPrimary">
                {children}
            </Typography>
        </Box>
    );
};

export default SectionTitle;
