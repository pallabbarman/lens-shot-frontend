import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Row } from 'antd';
const { Sider } = Layout;

interface SideBarProps {
    collapsed: boolean;
}

const SideBar = ({ collapsed }: SideBarProps) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <Row justify="center" style={{ padding: '1rem' }}>
                <h1 style={{ color: 'white' }}>
                    {collapsed ? 'Lens' : 'LensShot'}
                </h1>
            </Row>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'nav 1',
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'nav 3',
                    },
                ]}
            />
        </Sider>
    );
};

export default SideBar;
