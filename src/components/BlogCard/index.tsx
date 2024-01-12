import { IBlog } from '@/types/blog';
import { Box, Card, CardProps, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps extends CardProps {
    blog: IBlog;
}

const BlogCard = ({ blog, ...props }: BlogCardProps) => {
    return (
        <Card
            component={Link}
            href={`/blog/${blog.id}`}
            sx={{
                borderRadius: 0,
                boxShadow: 'none',
                textDecoration: 'none',
            }}
            {...props}
        >
            <Image
                src={blog.img}
                alt={blog.title}
                height={230}
                width={0}
                sizes="100vw"
                style={{
                    width: '100%',
                    objectFit: 'cover',
                }}
            />
            <Box my={1}>
                <Typography variant="text5" color="textSecondary">
                    {blog.createdAt} | {blog.category.name}
                </Typography>
            </Box>
            <Tooltip placement="top" title={blog.title}>
                <Typography variant="h2" mb={0.5} noWrap fontWeight={400}>
                    {blog.title}
                </Typography>
            </Tooltip>
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
                {blog.content}
            </Typography>
        </Card>
    );
};

export default BlogCard;
