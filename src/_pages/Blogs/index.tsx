'use client';

import BlogCard from '@/components/BlogCard';
import CardSkeletonField from '@/components/CardSkeletonField';
import MessageCard from '@/components/MessageCard';
import SectionTitle from '@/components/SectionTitle';
import { useGetBlogsQuery } from '@/redux/features/blogApi';
import { Box, Grid } from '@mui/material';
import size from 'lodash/size';
import { toast } from 'react-toastify';

const Blogs = () => {
    const { data, isLoading, isError, isSuccess, error } = useGetBlogsQuery('');

    let content = null;

    if (isLoading) {
        content = <CardSkeletonField />;
    } else if (isError && error) {
        toast.error('Something went wrong! Please try again!');
        content = <MessageCard />;
    } else if (isSuccess && size(data?.data) === 0) {
        content = <MessageCard />;
    } else if (isSuccess && size(data?.data) > 0) {
        content = (
            <Grid container spacing={3}>
                {data?.data?.map((blog) => (
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

export default Blogs;
