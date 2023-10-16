'use client';

import { Layout } from 'antd';
import { ReactNode, useState } from 'react';
import ContentLayout from '../Content';
import HeaderLayout from '../Header';
import SideBar from '../Sider';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => setCollapsed(!collapsed);

    return (
        <Layout>
            <SideBar collapsed={collapsed} />
            <Layout>
                <HeaderLayout
                    collapsed={collapsed}
                    onCollapsed={handleToggle}
                />
                <ContentLayout>{children}</ContentLayout>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
