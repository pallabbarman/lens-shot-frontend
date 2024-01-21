'use client';

import AvatarInfo from '@/components/AvatarInfo';
import MessageCard from '@/components/MessageCard';
import Progress from '@/components/Progress';
import SectionTitle from '@/components/SectionTitle';
import { useGetFeedbacksQuery } from '@/redux/features/feedbackApi';
import { IFeedback } from '@/types/feedback';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import AddFeedback from './components/AddFeedback';

const Feedback = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const { data, isLoading, error, isError, isSuccess } =
        useGetFeedbacksQuery(undefined);

    const handleOpen = () => setOpenDialog(true);
    const handleClose = () => setOpenDialog(false);

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
                    <AvatarInfo
                        key={feedback.id}
                        name={`${feedback?.user?.firstName} ${feedback?.user?.lastName}`}
                        comment={feedback?.feedback}
                        date={feedback?.createdAt}
                    />
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
