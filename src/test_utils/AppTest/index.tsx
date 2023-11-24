import Providers from '@/lib/Providers';
import { ReactNode } from 'react';

interface AppTestProps {
    children: ReactNode;
}

const AppTest = ({ children }: AppTestProps) => {
    return <Providers>{children}</Providers>;
};

export default AppTest;
