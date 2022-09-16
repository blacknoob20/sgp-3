import { Button, Card, Checkbox, Form, Input, Layout } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.prefectura.svg';

export const LoginPage = () => {
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
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete='off'
                >
                    <Form.Item
                        label='Username'
                        name='username'
                        rules={[{ required: true, message: 'Por favor, ingrese su username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label='Password'
                        name='password'
                        rules={[{ required: true, message: 'Por favor, ingrese su password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                        <Link to={'recuperar'}>¿Olvidó su contraseña?</Link>
                    </Form.Item>

                    <Button type='primary' htmlType='submit' block>
                        Submit
                    </Button>
                </Form>
            </Card>
        </Layout>
    )
}
