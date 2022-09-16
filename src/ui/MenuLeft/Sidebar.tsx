import { Layout, Menu, Typography } from 'antd';


const { Sider, } = Layout;

export const Sidebar = ({collapsed = false}) => {

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            {/* <div className='logo' /> */}
            <Typography.Title level={3} style={{ color: 'white', textAlign: 'center' }}>SGP 3</Typography.Title>
            <Menu
                theme='dark'
                mode='inline'
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        // icon: <UserOutlined />,
                        label: 'nav 1',
                    },
                    {
                        key: '2',
                        // icon: <VideoCameraOutlined />,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        // icon: <UploadOutlined />,
                        label: 'nav 3',
                    },
                ]}
            />
        </Sider>
    )
}
