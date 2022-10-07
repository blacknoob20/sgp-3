import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Card, Form, Input, Layout, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuthStore } from './hooks/useAuthStore';

import logo from '../assets/logo.prefectura.svg';
import useWindowDimensions from '../hooks/useWindowDimensions';

export const LoginPage = () => {
    const [form] = Form.useForm();
    const { formValues, isLoading, isError, errors, IniciarSesion } = useAuthStore();
    const { x: screenWidth } = useWindowDimensions();
    useEffect(() => {
        form.setFieldsValue(formValues);
    }, []);

    const handleSubmit = async (values: any) => {
        IniciarSesion(values);
    }

    return (
        <Layout className='login-layout'>
            <Card
                style={{ width: (screenWidth < 500 ? '95vw' : 500), height: 500 }}
                cover={
                    <img src={logo} alt='Logo-prefectura' height={200} style={{ marginTop: 25 }} />
                }
            >
                <Form
                    autoComplete='off'
                    disabled={isLoading}
                    form={form}
                    labelCol={{ span: 6 }}
                    onFinish={handleSubmit}
                    // onFinishFailed={onFinishFailed}
                    wrapperCol={{ span: 18 }}
                >
                    <Form.Item
                        label={<Typography.Text strong>Usuario</Typography.Text>}
                        name='idusuario'
                        rules={[{ required: true, message: '¡ Por favor, ingrese su usuario !' }]}
                    >
                        <Input
                            placeholder='Usuario de red'
                            suffix={<Typography.Text type={'secondary'}><UserOutlined /></Typography.Text>}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<Typography.Text strong>Contraseña</Typography.Text>}
                        name='clave'
                        rules={[{ required: true, message: '¡ Por favor, ingrese su contraseña !' }]}
                    >
                        <Input.Password
                            placeholder='Clave de acceso'
                        />
                    </Form.Item>

                    <Button type='primary' htmlType='submit' block loading={isLoading}>
                        Acceder
                    </Button>

                    <Form.Item wrapperCol={{ offset: 16, span: 8 }}>
                        <Link to={'verificacion'}>¿Olvidó su contraseña?</Link>
                    </Form.Item>
                </Form>
                {
                    isError && <Alert
                        message={errors?.status}
                        description={errors?.error}
                        type='error'
                        showIcon
                    />
                }
            </Card>
        </Layout>
    )
}
