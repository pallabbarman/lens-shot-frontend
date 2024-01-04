import ArrowRightIcon from '@/icons/ArrowRightIcon';
import { Box, BoxProps, Typography } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CategoryItemsProps extends BoxProps {
    href: string;
    children: ReactNode;
}

const CategoryItems = ({ href, children, ...props }: CategoryItemsProps) => {
    return (
        <Box mt={2} {...props}>
            <Typography
                variant="text5"
                color="textSecondary"
                display="flex"
                alignItems="center"
                justifyContent="end"
                component={Link}
                href={href}
                sx={{
                    textDecoration: 'none',
                }}
            >
                {children} <ArrowRightIcon />
            </Typography>
        </Box>
    );
};

export default CategoryItems;
