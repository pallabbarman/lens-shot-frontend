'use client';

import AvatarInfo from '@/components/AvatarInfo';
import Progress from '@/components/Progress';
import { useGetBlogQuery } from '@/redux/features/blogApi';
import { useDeleteCommentMutation } from '@/redux/features/commentApi';
import { IComment } from '@/types/comment';
import { IGenericErrorResponse } from '@/types/error';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

interface BlogCommentsProps {
    blogId: string;
}

const BlogComments = ({ blogId }: BlogCommentsProps) => {
    const { data, isLoading, error, isError, isSuccess } =
        useGetBlogQuery(blogId);
    const [
        deleteComment,
        {
            isSuccess: isDeleteSuccess,
            isError: isDeleteError,
            isLoading: isDeleteLoading,
            data: deleteData,
            error: deleteError,
        },
    ] = useDeleteCommentMutation();

    useEffect(() => {
        if (isDeleteSuccess && deleteData?.message) {
            toast.success(deleteData.message);
        }
        if (isDeleteError && deleteError) {
            toast.error('Something went wrong! Please try again!');
            if ('status' in deleteError) {
                const errorMessage = deleteError.data as IGenericErrorResponse;
                if (errorMessage) {
                    toast.error(errorMessage?.message);
                }
            }
        }
    }, [deleteData, deleteError, isDeleteError, isDeleteSuccess]);

    const handleDelete = (deleteId: string) => {
        deleteComment(deleteId);
    };

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
                        isUpdate
                        name={`${comment?.user?.firstName} ${comment?.user?.lastName}`}
                        comment={comment.comment}
                        date={comment.createdAt}
                        disabled={isDeleteLoading}
                        onDelete={() => handleDelete(comment.id as string)}
                    />
                ))}
            </Box>
        );
    }

    return content;
};

export default BlogComments;
