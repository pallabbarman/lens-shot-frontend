import { Container } from '@mui/material';
import { ReactNode } from 'react';
import MainLayoutFooter from './components/MainLayoutFooter';
import MainLayoutNavbar from './components/MainLayoutNavbar';

interface MainLayoutProps {
    children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <MainLayoutNavbar />
            <Container maxWidth="lg">{children}</Container>
            <MainLayoutFooter />
        </>
    );
};

export default MainLayout;
