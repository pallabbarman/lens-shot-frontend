import { Box, Card, CardProps, Tooltip, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface BlogCardProps extends CardProps {
    img: string | StaticImageData;
    alt?: string;
    children?: ReactNode;
}

const BlogCard = ({ img, alt, title, children, ...props }: BlogCardProps) => {
    return (
        <Card
            component={Link}
            href="/"
            sx={{ borderRadius: 0, boxShadow: 'none', textDecoration: 'none' }}
            {...props}
        >
            <Image
                src={img}
                alt={alt || 'blog'}
                height={230}
                width={0}
                style={{
                    width: '100%',
                    objectFit: 'cover',
                }}
            />
            <Box my={1}>
                <Typography variant="text5" color="textSecondary">
                    Sep 25, 2022 | Wedding
                </Typography>
            </Box>
            <Tooltip placement="top" title={title}>
                <Typography variant="h2" mb={0.5} noWrap>
                    {title}
                </Typography>
            </Tooltip>
            {children && (
                <Typography
                    variant="text4"
                    fontWeight={400}
                    color="textSecondary"
                    sx={{
                        WebkitLineClamp: '3',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        wordBreak: 'break-all',
                    }}
                >
                    {children}
                </Typography>
            )}
        </Card>
    );
};

export default BlogCard;
