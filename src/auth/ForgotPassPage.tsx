import { UserOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Divider, Form, Input, Layout, Space, Typography } from 'antd';

export const ForgotPassPage = () => {
    return (
        <Layout className='login-layout'>
            <Badge.Ribbon text={'Nueva Contraseña'} placement={'start'} >
                <Card
                    title={' '}
                    size={'small'}
                    style={{ width: 500 }}
                >
                    <Form
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                    >
                        <Form.Item label={'Usuario'}>
                            <Input
                                placeholder='Usuario del dominio de red'
                                suffix={
                                    <Typography.Text type={'secondary'}>
                                        <UserOutlined />
                                    </Typography.Text>
                                }
                            />
                        </Form.Item>
                        <Form.Item label={'Contraseña'}>
                            <Input.Password placeholder='Ingrese su nueva contrase&ntilde;a' />
                        </Form.Item>
                        <Form.Item label={'Confirmar'}>
                            <Input.Password placeholder='Confirme su nueva contrase&ntilde;a' />
                        </Form.Item>
                    </Form>
                    <Divider />
                    <Space>
                        <Button type={'primary'}>Cambiar</Button>
                        <Button>Salir</Button>
                    </Space>
                </Card>
            </Badge.Ribbon>
            <div id='div_resultado'></div>
        </Layout>
    )
}
