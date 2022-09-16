import { FC } from 'react';
import { AppstoreOutlined, DownOutlined, EditOutlined, EllipsisOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Divider, Dropdown, Layout, Menu, Row, Space, SpaceProps, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';

const { Header } = Layout;
const SplitSpace: FC<SpaceProps> = props => (
    <Space split={<Divider type='vertical' />} size={5} {...props} />
);
const menu1 = (
    <Menu
        items={[
            {
                label: (
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                ),
                key: '0',
            },
        ]}
    />
);
const menu2 = (
    <Menu
        items={[
            {
                label: <a href="https://www.antgroup.com">1st menu item</a>,
                key: '0',
            },
            {
                label: <a href="https://www.aliyun.com">2nd menu item</a>,
                key: '1',
            },
            {
                type: 'divider',
            },
            {
                label: '3rd menu item',
                key: '3',
            },
        ]}
    />
);

interface TopbarProps {
    collapsed: boolean;
    onClick: () => void;
}

export const Topbar = ({ collapsed = false, onClick }: TopbarProps) => {
    return (
        <Header className='site-layout-background'>
            <Row>
                <Col span={2}>
                    {
                        collapsed
                            ? <MenuUnfoldOutlined className='trigger' onClick={onClick} />
                            : <MenuFoldOutlined className='trigger' onClick={onClick} />
                    }
                </Col>
                <Col span={22} style={localStyles.avatarToolbar}>

                    <SplitSpace>
                        <Dropdown
                            overlay={menu2}
                            trigger={['click']}
                        >
                            <a
                                title='Sistemas'
                                onClick={e => e.preventDefault()}>
                                <Typography.Text>
                                    <Space>
                                        <AppstoreOutlined />
                                        Sistemas
                                    </Space>
                                </Typography.Text>
                            </a>
                        </Dropdown>
                        <Space>
                            <Dropdown overlay={menu1} trigger={['click']}>
                                <a onClick={e => e.preventDefault()}>
                                    <Avatar shape={'square'} {...localStyles.avatarProps} />
                                </a>
                            </Dropdown>
                            User
                        </Space>
                    </SplitSpace>
                </Col>
            </Row>
        </Header>
    )
}

const localStyles = {
    avatarToolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    avatarProps: {
        size: { xs: 24, sm: 32, md: 40, lg: 40, xl: 40, xxl: 40 },
        icon: <UserOutlined />,
    },
}
