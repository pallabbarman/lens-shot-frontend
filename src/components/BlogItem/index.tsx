import { Box, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import SectionTitle from '../SectionTitle';

interface BlogItemProps {
    img: string | StaticImageData;
    title: string;
    children: ReactNode;
    label?: ReactNode;
}

const BlogItem = ({ img, title, label, children }: BlogItemProps) => {
    return (
        <Box my={{ xs: 2, sm: 5 }}>
            <Box
                position="relative"
                width="100%"
                height={{ xs: 300, sm: 500, md: 700 }}
            >
                <Image src={img} alt={title} fill objectFit="cover" />
            </Box>
            <Box mt={3} textAlign="justify">
                <SectionTitle label={label} textAlign="start">
                    {title}
                </SectionTitle>
                <Typography
                    variant="text3"
                    color="textSecondary"
                    fontWeight={400}
                >
                    {children}
                </Typography>
            </Box>
        </Box>
    );
};

export default BlogItem;
