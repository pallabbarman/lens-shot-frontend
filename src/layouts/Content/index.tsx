import { Layout, theme } from 'antd';
import { ReactNode } from 'react';

const { Content } = Layout;

interface ContentLayoutProps {
    children: ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
            }}
        >
            {children}
        </Content>
    );
};

export default ContentLayout;
