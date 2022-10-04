import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Divider, Form, Input, Layout, Space, Typography } from 'antd';

import { useAppSelector } from '../hooks/useReduxToolkit';

export const ForgotPassPage = () => {
    const navigate = useNavigate();
    const formValues = useAppSelector(state => state.auth.recuperar);

    useEffect(() => {
        // TODO: Validar haya contestado correctamente la pregunta secreta
        if(!formValues.numeropregunta) navigate('/sesion');
    }, [formValues]);

    return (
        <Layout className='login-layout'>
            <Badge.Ribbon text={'Nueva Contraseña'} placement={'start'} >
                <Card
                    title={' '}
                    size={'small'}
                    style={{ width: 500, height: 300 }}
                >
                    <Form
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                    >
                        <Form.Item
                            label={<Typography.Text strong>Usuario</Typography.Text>}
                            name={'idusuario'}
                        >
                            <Input
                                placeholder='Usuario del dominio de red'
                                suffix={
                                    <Typography.Text type={'secondary'}>
                                        <UserOutlined />
                                    </Typography.Text>
                                }
                            />
                        </Form.Item>
                        <Form.Item
                            label={<Typography.Text strong>Contraseña</Typography.Text>}
                            name={'clave'}
                        >
                            <Input.Password placeholder='Ingrese su nueva contrase&ntilde;a' />
                        </Form.Item>

                        <Form.Item
                            label={<Typography.Text strong>Confirmar</Typography.Text>}
                            name={'confirmar'}
                        >
                            <Input.Password placeholder='Confirme su nueva contrase&ntilde;a' />
                        </Form.Item>

                        <Divider />
                        <Space>
                            <Button type={'primary'} htmlType={'submit'}>Cambiar</Button>
                            <Button onClick={() => navigate('/sesion')}>Salir</Button>
                        </Space>
                    </Form>
                </Card>
            </Badge.Ribbon>
            <div id='div_resultado'></div>
        </Layout>
    )
}
