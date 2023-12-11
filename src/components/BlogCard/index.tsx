import { cssColor } from '@/utils/color';
import { ArrowRightAlt } from '@mui/icons-material';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardProps,
    Tooltip,
    Typography,
} from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface BlogCardProps extends CardProps {
    img: string | StaticImageData;
    alt?: string;
    children?: ReactNode;
}

const BlogCard = ({ img, alt, title, children, ...props }: BlogCardProps) => {
    return (
        <Card sx={{ borderRadius: 0, boxShadow: 'none' }} {...props}>
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
                        WebkitLineClamp: '4',
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
            <CardActions sx={{ p: 0 }}>
                <Button
                    endIcon={<ArrowRightAlt />}
                    sx={{
                        mt: 1,
                        pl: 0,
                        boxShadow: 0,
                        color: cssColor('stormgrey'),
                        backgroundColor: cssColor('white'),
                        '&:hover, &:active, &:focus': {
                            boxShadow: 0,
                            backgroundColor: cssColor('white'),
                        },
                    }}
                >
                    Read more
                </Button>
            </CardActions>
        </Card>
    );
};

export default BlogCard;
