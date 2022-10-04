import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useReduxToolkit';

import { Alert, Button, Card, Form, Input, Layout, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { IniciarSesion } from '../store/slices/auth/loginSlice';
import { useIniciarSesionApiMutation } from '../store/apis/auth/authApi';

import logo from '../assets/logo.prefectura.svg';

export const LoginPage = () => {
    const navigate = useNavigate();
    const formValues = useAppSelector((state) => state.auth.login);
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const [IniciarSesionApi, AuthStore] = useIniciarSesionApiMutation();
    const { isLoading, isError, error: errors }: any = AuthStore;

    useEffect(() => {
        form.setFieldsValue(formValues);
    }, []);

    const handleSubmit = async (values: any) => {
        try {
            const payload = await IniciarSesionApi(values).unwrap();

            dispatch(IniciarSesion({ ...values, ...payload }));
            navigate('/');
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
