'use client';

import CommentInfo from '@/components/CommentInfo';
import MessageCard from '@/components/MessageCard';
import Progress from '@/components/Progress';
import SectionTitle from '@/components/SectionTitle';
import {
    useDeleteFeedbackMutation,
    useGetFeedbacksQuery,
} from '@/redux/features/feedbackApi';
import { IGenericErrorResponse } from '@/types/error';
import { IFeedback } from '@/types/feedback';
import { Box, Button } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AddFeedback from './components/AddFeedback';
import EditFeedback from './components/EditFeedback';

const Feedback = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const { data, isLoading, error, isError, isSuccess } =
        useGetFeedbacksQuery(undefined);
    const [
        deleteFeedback,
        {
            isSuccess: isDeleteSuccess,
            isError: isDeleteError,
            isLoading: isDeleteLoading,
            data: deleteData,
            error: deleteError,
        },
    ] = useDeleteFeedbackMutation();

    const handleOpen = () => setOpenDialog(true);
    const handleClose = () => setOpenDialog(false);

    useEffect(() => {
        if (isDeleteSuccess && deleteData?.message) {
            toast.success(deleteData.message);
        }
        if (isDeleteError && deleteError) {
            if ('status' in deleteError) {
                const errorMessage = deleteError.data as IGenericErrorResponse;
                if (errorMessage) {
                    toast.error(errorMessage?.message);
                }
            } else {
                toast.error('Something went wrong! Please try again!');
            }
        }
    }, [deleteData, deleteError, isDeleteError, isDeleteSuccess]);

    const handleDelete = (deleteId: string) => {
        deleteFeedback(deleteId);
    };

    let content = null;

    if (isLoading) {
        content = <Progress fullHeight={false} />;
    } else if (isError && error) {
        toast.error('Something went wrong! Please try again!');
        content = <MessageCard />;
    } else if (isSuccess && data?.data) {
        content = (
            <>
                {data?.data?.map((feedback: IFeedback) => (
                    <Fragment key={feedback.id}>
                        <CommentInfo
                            isUpdate
                            name={`${feedback?.user?.firstName} ${feedback?.user?.lastName}`}
                            comment={feedback?.feedback}
                            date={feedback?.createdAt}
                            disabled={isDeleteLoading}
                            onEdit={() => setOpenEditDialog(true)}
                            onDelete={() => handleDelete(feedback.id as string)}
                        />
                        <EditFeedback
                            open={openEditDialog}
                            feedback={feedback}
                            onClose={() => setOpenEditDialog(false)}
                        />
                    </Fragment>
                ))}
            </>
        );
    }

    return (
        <>
            <AddFeedback open={openDialog} onClose={handleClose} />
            <Box mt={{ xs: 3, sm: 5 }}>
                <SectionTitle label="REVIEWS">Feedback</SectionTitle>
                <Button onClick={handleOpen}>Leave Feedback</Button>
                {content}
            </Box>
        </>
    );
};

export default Feedback;
