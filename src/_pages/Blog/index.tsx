'use client';

import BlogCard from '@/components/BlogCard';
import FilterSearch from '@/components/FilterSearch';
import SectionTitle from '@/components/SectionTitle';
import { useGetBlogsQuery } from '@/redux/features/blogApi';
import { Box, Grid } from '@mui/material';

const Blog = () => {
    const { data } = useGetBlogsQuery('');

    return (
        <Box mt={{ xs: 3, sm: 5 }}>
            <SectionTitle label="READ" textAlign="left">
                News & Blog
            </SectionTitle>
            <FilterSearch />
            <Grid container spacing={3}>
                {data?.data?.map((blog) => (
                    <Grid item md={4} sm={6} xs={12} key={blog.id}>
                        <BlogCard blog={blog} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Blog;
