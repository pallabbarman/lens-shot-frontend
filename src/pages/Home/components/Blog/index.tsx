import abc from '@/assets/1.jpg';
import BlogCard from '@/components/BlogCard';
import SectionTitle from '@/components/SectionTitle';
import { Box, Grid } from '@mui/material';

const Blog = () => {
    return (
        <Box mt={{ xs: 3, sm: 5 }}>
            <SectionTitle label="READ">News & Blog</SectionTitle>
            <Grid container spacing={3}>
                <Grid item md={4} sm={6} xs={12}>
                    <BlogCard img={abc} title="Wedding nulla sapien">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Deserunt at iusto quaerat veniam dolorem, quis
                        eius blanditiis ut recusandae esse.
                    </BlogCard>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <BlogCard img={abc} title="Wedding nulla sapien">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Deserunt at iusto quaerat veniam dolorem, quis
                        eius blanditiis ut recusandae esse.
                    </BlogCard>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <BlogCard img={abc} title="Wedding nulla sapien">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Deserunt at iusto quaerat veniam dolorem, quis
                        eius blanditiis ut recusandae esse.
                    </BlogCard>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Blog;
