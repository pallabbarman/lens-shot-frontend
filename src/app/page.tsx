import MainLayout from '@/layouts/Main';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/pages/Home'));

const Home = () => {
    return (
        <MainLayout>
            <HomePage />
        </MainLayout>
    );
};

export default Home;
