import notFound from '@/assets/not-found.svg';
import MessageCard from '@/components/MessageCard';

const NotFoundPage = () => {
    return (
        <MessageCard img={notFound} fullHeight>
            Sorry, the page you visited does not exist.
        </MessageCard>
    );
};

export default NotFoundPage;
