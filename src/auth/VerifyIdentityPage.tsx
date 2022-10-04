import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Button, Card, Divider, Form, Image, Input, Layout, Space, Typography } from 'antd';
import { useGetCaptchaQuery, useGetPreguntasMutation } from '../store/apis/auth/authApi';
import { useAppDispatch, useAppSelector } from '../hooks/useReduxToolkit';
import { RecuperarClave } from '../store/slices/auth/loginSlice';

export const VerifyIdentityPage = () => {
    const formValues = useAppSelector(state => state.auth.recuperar);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [GetPreguntas, AuthApi] = useGetPreguntasMutation();
    const { data: Captcha, isLoading: isCaptchaLoading, refetch: getCaptchaImg } = useGetCaptchaQuery();
    const { isLoading }: any = AuthApi;

    useEffect(() => {
        form.setFieldsValue(formValues);
    }, [formValues]);

    const validateCaptcha = (text: string) => (
        (text === '' || Captcha?.text === text)
            ? Promise.resolve()
            : Promise.reject(new Error('No coincide el texto de la imagen.'))
    );

    const validateCedula = (text: any) => {

        if (Number.isInteger(text * 1)) {
            if (text.length == 10) return Promise.resolve();
            else return Promise.reject(new Error('La cédula es un número que consta de 10 dígitos.'));
        }

        return Promise.reject(new Error('Solo debe ingresar números enteros.'));
    }

    const handleCaptchaClick = () => {
        getCaptchaImg();
        // Limpiar el txt del captacha
        form.setFieldValue('captchares', '');
    }

    const handleSubmit = async (values: any) => {
        try {
            const payload = await GetPreguntas(values).unwrap();

            dispatch(RecuperarClave({...values, ...payload}));
            navigate('/sesion/identidad');
            // console.log('fulfilled', JSON.stringify(payload, null, 4));
        } catch (error: any) {
            getCaptchaImg();
            console.log('rejected', JSON.stringify(error.status, null, 4));
        }
    }

    return (
        <Layout className='login-layout'>
            <Badge.Ribbon text={'Datos de Empleado'} placement={'start'}>
                <Card
                    title={' '}
                    size={'small'}
                    style={{ width: 500 }}
                >
                    <Form
                        autoComplete='off'
                        disabled={isLoading}
                        form={form}
                        labelCol={{ span: 6 }}
                        onFinish={handleSubmit}
                        wrapperCol={{ span: 18 }}
                    >
                        <Form.Item
                            label={<Typography.Text strong>Usuario</Typography.Text>}
                            name={'idusuario'}
                            rules={[{ required: true, message: '¡ Por favor, ingrese su usuario !' }]}
                        >
                            <Input placeholder='Usuario del dominio de red' />
                        </Form.Item>

                        <Form.Item
                            label={<Typography.Text strong>Cédula</Typography.Text>}
                            name={'numdocumento'}
                            rules={[
                                { required: true, message: '¡Debe ingresar su número de cédula.!' },
                                { validator: (_, value: string) => validateCedula(value), }
                            ]}

                        >
                            <Input placeholder='C&eacute;dula de identidad' />
                        </Form.Item>

                        <Form.Item
                            name={'idempleado'}
                            label={<Typography.Text strong>Código</Typography.Text>}
                            rules={[{ required: true, message: '¡ Por favor, ingrese su código de empleado !' }]}
                        >
                            <Input placeholder='C&oacute;digo del empleado' />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8 }}>
                            <Image
                                fallback='data:image/png;base64,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'
                                height={70}
                                preview={false}
                                src={`data: image/png;base64,${Captcha?.captcha}`}
                            />
                        </Form.Item>

                        <Button block disabled={isCaptchaLoading} loading={isCaptchaLoading} onClick={handleCaptchaClick} type='link' > No legible? Cambiar texto. </Button>

                        <Form.Item
                            hasFeedback
                            name={'captchares'}
                            rules={[
                                { required: true, message: '¡ Por favor, ingrese el texto de la imagen !' },
                                { validator: (_, value: string) => validateCaptcha(value) },
                            ]}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Ingrese el texto de la Imagen' />
                        </Form.Item>

                        <Divider />

                        <Space>
                            <Button type={'primary'} htmlType={'submit'} >Verificar</Button>
                            <Button onClick={() => navigate('/sesion')}>Salir</Button>
                        </Space>
                    </Form>
                </Card>
                <br />
            </Badge.Ribbon>
        </Layout>
    )
}
