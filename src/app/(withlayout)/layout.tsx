import DashboardLayout from '@/layouts/Layout';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
