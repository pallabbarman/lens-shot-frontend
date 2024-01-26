'use client';

import CommentInfo from '@/components/CommentInfo';
import Progress from '@/components/Progress';
import { useGetBlogQuery } from '@/redux/features/blogApi';
import { useDeleteCommentMutation } from '@/redux/features/commentApi';
import { IComment } from '@/types/comment';
import { IGenericErrorResponse } from '@/types/error';
import Box from '@mui/material/Box';
import { Fragment, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import EditComment from '../EditComment';

interface BlogCommentsProps {
    blogId: string;
}

const BlogComments = ({ blogId }: BlogCommentsProps) => {
    const [openDialog, setOpenDialog] = useState(false);

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

    const handleOpen = () => setOpenDialog(true);
    const handleClose = () => setOpenDialog(false);

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
                    <Fragment key={comment.id}>
                        <CommentInfo
                            isUpdate
                            name={`${comment?.user?.firstName} ${comment?.user?.lastName}`}
                            comment={comment.comment}
                            date={comment.createdAt}
                            disabled={isDeleteLoading}
                            onEdit={handleOpen}
                            onDelete={() => handleDelete(comment.id as string)}
                        />
                        <EditComment
                            open={openDialog}
                            comment={comment}
                            onClose={handleClose}
                        />
                    </Fragment>
                ))}
            </Box>
        );
    }

    return content;
};

export default BlogComments;
