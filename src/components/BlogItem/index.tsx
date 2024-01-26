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
                <Image
                    src={img}
                    alt={title}
                    fill
                    placeholder="blur"
                    style={{ objectFit: 'cover' }}
                    blurDataURL="data:image/jpeg;base64,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"
                />
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
