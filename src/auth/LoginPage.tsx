import { UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Layout, Typography } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.prefectura.svg';
import { useFetch } from '../hooks/useFetch';
import { useForm } from '../hooks/useForm';

interface Login {
    idusuario: string;
    clave: string;
    ip?: string;
}

const initialState: Login = {
    idusuario: 'crguerrero',
    clave: '123456',
}

export const LoginPage = () => {
    const { formValues, handleInputChange } = useForm(initialState);
    const { fetchSinToken } = useFetch();

    const handleSubmit = async () => {
        // const data = await fetchSinToken('http://localhost:88/public/login', {...formValues, ip:'127.0.0.1'});
        const data = await fetchSinToken('http://localhost:88/public/login', formValues);
        console.log(formValues, data);

    }


    return (
        <Layout className='login-layout'>
            <Card
                style={{ width: 500 }}
                cover={
                    <img src={logo} alt='Logo-prefectura' height={200} style={{ marginTop: 25 }} />
                }
            >
                <Form
                    name='basic'
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    initialValues={initialState}
                    onFinish={handleSubmit}
                    // onFinishFailed={onFinishFailed}
                    autoComplete='off'
                >
                    <Form.Item
                        label={<Typography.Text strong>Usuario</Typography.Text>}
                        name='idusuario'
                        rules={[{ required: true, message: '¡ Por favor, ingrese su usuario !' }]}
                    >
                        <Input
                            placeholder='Usuario de red'
                            suffix={<Typography.Text type={'secondary'}><UserOutlined /></Typography.Text>}
                            onChange={handleInputChange}
                        // value={formValues.idusuario}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<Typography.Text strong>Contraseña</Typography.Text>}
                        name='clave'
                        rules={[{ required: true, message: '¡ Por favor, ingrese su contraseña !' }]}
                    >
                        <Input.Password
                            placeholder='Clave de acceso'
                            onChange={handleInputChange}
                        // value={formValues.clave}
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                        <Link to={'recuperar'}>¿Olvidó su contraseña?</Link>
                    </Form.Item>

                    <Button type='primary' htmlType='submit' block>
                        Acceder
                    </Button>
                </Form>
            </Card>
        </Layout>
    )
}
