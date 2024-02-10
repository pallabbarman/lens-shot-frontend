import DashboardLayout from '@/layouts/Dashboard';
import { ReactNode } from 'react';

interface DashboardLayoutPageProps {
    children: ReactNode;
}

const DashboardLayoutPage = ({ children }: DashboardLayoutPageProps) => {
    return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardLayoutPage;
