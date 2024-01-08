import Login from '@/_pages/Login';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login | LensShot',
    description: 'LensShot is a photography website',
};

const LoginPage = () => {
    return <Login />;
};

export default LoginPage;
