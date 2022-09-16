import { Badge, Button, Card, Divider, Form, Input, Layout, Space } from 'antd';

export const VerifyIdentityPage = () => {
    return (
        <Layout className='login-layout'>
            <Badge.Ribbon text={'Datos de Empleado'} placement={'start'}>
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
                            <Input placeholder='Usuario del dominio de red' />
                        </Form.Item>
                        <Form.Item label={'Cédula'}>
                            <Input placeholder='C&eacute;dula de identidad' />
                        </Form.Item>
                        <Form.Item label={'Código'}>
                            <Input placeholder='C&oacute;digo del empleado' />
                        </Form.Item>
                        <div className='form-group text-center'>
                            <img id='im_captcha' src='../../class/se/captcha/captcha.php' alt='Captcha' title='Captcha' style={{ display: 'block', margin: 0, textAlign: 'center' }} />
                            <a href='#' id='ah_cambiarimagen' style={{ display: 'block', margin: 0, textAlign: 'center' }}>No legible? Cambiar texto.</a>
                            <Input placeholder='Ingrese el texto de la Imagen' />
                        </div>
                        <Divider />
                        <Space>
                            <Button type={'primary'} >Verificar</Button>
                            <Button>Salir</Button>
                        </Space>
                    </Form>
                </Card>
                <br />
            </Badge.Ribbon>
        </Layout>
    )
}
