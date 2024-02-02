'use client';

import BlogCard from '@/components/BlogCard';
import CardSkeletonField from '@/components/CardSkeletonField';
import SectionTitle from '@/components/SectionTitle';
import { useGetBlogsQuery } from '@/redux/features/blogApi';
import { Box, Grid } from '@mui/material';
import { shuffle, slice } from 'lodash';
import { toast } from 'react-toastify';

const Blog = () => {
    const { data, isLoading, isError, isSuccess, error } = useGetBlogsQuery('');

    let content = null;

    if (isLoading) {
        content = <CardSkeletonField />;
    } else if (isError && error) {
        toast.error('Something went wrong! Please try again!');
        content = null;
    } else if (isSuccess && data?.data) {
        const blogData = slice(shuffle(data.data), 0, 6);
        content = (
            <Grid container spacing={3}>
                {blogData?.map((blog) => (
                    <Grid item md={4} sm={6} xs={12} key={blog.id}>
                        <BlogCard blog={blog} />
                    </Grid>
                ))}
            </Grid>
        );
    }

    return (
        <Box mt={{ xs: 3, sm: 5 }}>
            <SectionTitle label="READ">News & Blog</SectionTitle>
            {content}
        </Box>
    );
};

export default Blog;
