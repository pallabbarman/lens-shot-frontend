'use client';

import AvatarInfo from '@/components/AvatarInfo';
import MessageCard from '@/components/MessageCard';
import Progress from '@/components/Progress';
import SectionTitle from '@/components/SectionTitle';
import { useGetFeedbacksQuery } from '@/redux/features/feedbackApi';
import { IFeedback } from '@/types/feedback';
import { Box, Typography } from '@mui/material';
import { toast } from 'react-toastify';

const Feedback = () => {
    const { data, isLoading, error, isError, isSuccess } =
        useGetFeedbacksQuery(undefined);

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
                        date={feedback.createdAt}
                    />
                ))}
            </>
        );
    }

    return (
        <Box mt={{ xs: 3, sm: 5 }}>
            <SectionTitle label="REVIEWS">Feedback</SectionTitle>
            <Typography variant="text3">Leave Feedback</Typography>
            {content}
        </Box>
    );
};

export default Feedback;
