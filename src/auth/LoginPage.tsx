import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Alert, Button, Card, Form, Input, Layout, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';


import logo from '../assets/logo.prefectura.svg';
import { useIniciarSesionMutation } from '../store/apis/auth/authApi';

const formValues = {
    clave: '123456',
    idusuario: 'lupesantes',
}

export const LoginPage = () => {
    const [IniciarSesion, AuthStore] = useIniciarSesionMutation();
    const [form] = Form.useForm();
    const { isLoading, isError, error: errors }: any = AuthStore;

    useEffect(() => {
        form.setFieldsValue(formValues);
    }, []);

    const handleSubmit = async (values: any) => {
        try {
            const payload = await IniciarSesion(values).unwrap();

            console.log('fulfilled', JSON.stringify(payload, null, 4));
        } catch (error: any) {
            console.log('rejected', JSON.stringify(error.status, null, 4));
        }
    }


    return (
        <Layout className='login-layout'>
            <Card
                style={{ width: 500, height: 500 }}
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
                        <Link to={'recuperar'}>¿Olvidó su contraseña?</Link>
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
