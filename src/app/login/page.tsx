import MainLayout from '@/layouts/Main';
import Login from '@/pages/Login';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login | LensShot',
    description: 'LensShot is a photography website',
};

const LoginPage = () => {
    return (
        <MainLayout>
            <Login />
        </MainLayout>
    );
};

export default LoginPage;
