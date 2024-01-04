import MainLayout from '@/layouts/Main';
import { ReactNode } from 'react';

interface MainLayoutPageProps {
    children: ReactNode;
}

const MainLayoutPage = ({ children }: MainLayoutPageProps) => {
    return <MainLayout>{children}</MainLayout>;
};

export default MainLayoutPage;
