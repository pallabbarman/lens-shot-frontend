import { Container } from '@mui/material';
import { ReactNode } from 'react';
import MainLayoutNavbar from './components/MainLayoutNavbar';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <MainLayoutNavbar />
            <Container maxWidth="xl">{children}</Container>
        </>
    );
};

export default MainLayout;
