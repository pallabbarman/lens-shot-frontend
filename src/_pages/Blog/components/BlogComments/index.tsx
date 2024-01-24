'use client';

import AvatarInfo from '@/components/AvatarInfo';
import Progress from '@/components/Progress';
import { useGetBlogQuery } from '@/redux/features/blogApi';
import { IComment } from '@/types/comment';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';

interface BlogCommentsProps {
    blogId: string;
}

const BlogComments = ({ blogId }: BlogCommentsProps) => {
    const { data, isLoading, error, isError, isSuccess } =
        useGetBlogQuery(blogId);

    let content = null;

    if (isLoading) {
        content = <Progress fullHeight={false} />;
    } else if (isError && error) {
        toast.error('Something went wrong! Please try again!');
        content = null;
    } else if (isSuccess && data?.data) {
        content = (
            <Box mb={3}>
                {data?.data?.comments?.map((comment: IComment) => (
                    <AvatarInfo
                        key={comment.id}
                        name={`${comment?.user?.firstName} ${comment?.user?.lastName}`}
                        comment={comment.comment}
                        date={comment.createdAt}
                    />
                ))}
            </Box>
        );
    }

    return content;
};

export default BlogComments;
