'use client';

import BlogItem from '@/components/BlogItem';
import MessageCard from '@/components/MessageCard';
import Progress from '@/components/Progress';
import { useGetBlogQuery } from '@/redux/features/blogApi';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import AddComment from './components/AddComment';

interface BlogProps {
    id: string;
}

const Blog = ({ id }: BlogProps) => {
    const { data, isError, isLoading, isSuccess, error } = useGetBlogQuery(id);

    let content = null;

    if (isLoading) {
        content = <Progress />;
    } else if (isError && error) {
        toast.error('Something went wrong! Please try again!');
        content = <MessageCard fullHeight />;
    } else if (isSuccess && data?.data) {
        content = (
            <>
                <BlogItem
                    img={data.data.img}
                    title={data.data.title}
                    label={data.data.category?.name}
                >
                    {data?.data?.content}
                </BlogItem>
                <Box>
                    <AddComment blogId={id} />
                </Box>
            </>
        );
    }

    return content;
};

export default Blog;
