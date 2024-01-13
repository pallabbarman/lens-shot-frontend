'use client';

import error from '@/assets/server-error.svg';
import MessageCard from '@/components/MessageCard';

const ErrorPage = () => {
    return (
        <MessageCard img={error}>
            Sorry, something went wrong. Please try again!
        </MessageCard>
    );
};

export default ErrorPage;
