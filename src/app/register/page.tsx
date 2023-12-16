import MainLayout from '@/layouts/Main';
import Registration from '@/pages/Registration';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Signup | LensShot',
    description: 'LensShot is a photography website',
};

const RegisterPage = () => {
    return (
        <MainLayout>
            <Registration />
        </MainLayout>
    );
};

export default RegisterPage;
