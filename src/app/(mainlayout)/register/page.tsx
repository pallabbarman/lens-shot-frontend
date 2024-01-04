import Registration from '@/pages/Registration';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Registration | LensShot',
    description: 'LensShot is a photography website',
};

const RegisterPage = () => {
    return <Registration />;
};

export default RegisterPage;
