import { Badge, Button, Card, Divider, Form, Input, Layout, Space } from 'antd';

export const UserQuestionsPage = () => {
    return (
        <Layout className='login-layout'>
            <Badge.Ribbon text={'Pregunta Secreta'} placement={'start'}>
                <Card
                    title={' '}
                    size={'small'}
                    style={{ width: 500 }}
                >
                    <Form
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                    >
                        <Form.Item label={'Pregunta'}>
                            <input type='hidden' id='hid_numeropregunta' name='hid_numeropregunta' value='' />
                            <Input placeholder='Pregunta Secreta' />
                        </Form.Item>
                        <Form.Item label={'Respuesta'}>
                            <Input placeholder='Respuesta a la Pregunta Secreta' />
                        </Form.Item>
                    </Form>
                    <Divider />
                    <Space>
                        <Button type={'primary'}>Responder</Button>
                        <Button >Salir</Button>
                    </Space>
                </Card>
                <br />
            </Badge.Ribbon>
        </Layout>
    )
}
