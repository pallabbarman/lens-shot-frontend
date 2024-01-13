'use client';

import BlogItem from '@/components/BlogItem';
import MessageCard from '@/components/MessageCard';
import Progress from '@/components/Progress';
import { useGetBlogQuery } from '@/redux/features/blogApi';
import { toast } from 'react-toastify';

interface BlogProps {
    params: { id: string };
}

const Blog = ({ params }: BlogProps) => {
    const { data, isError, isLoading, isSuccess, error } = useGetBlogQuery(
        params.id
    );

    let content = null;

    if (isLoading) {
        content = <Progress />;
    } else if (isError && error) {
        toast.error('Something went wrong! Please try again!');
        content = <MessageCard />;
    } else if (isSuccess && data?.data) {
        content = (
            <BlogItem
                img={data.data.img}
                title={data.data.title}
                label={data.data.category?.name}
            >
                {data?.data?.content}
            </BlogItem>
        );
    }

    return content;
};

export default Blog;
