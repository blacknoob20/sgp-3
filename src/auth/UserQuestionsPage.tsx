import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert, Badge, Button, Card, Divider, Form, Input, Layout, Space } from 'antd';

import { useAppDispatch, useAppSelector } from '../hooks/useReduxToolkit';
import { useGetPreguntasMutation, useValidaPreguntasApiMutation } from '../store/apis/auth/authApi';
import { RecuperarClave, RecuperarClaveProps } from '../store/slices/auth/loginSlice';

export const UserQuestionsPage = () => {
    const formValues = useAppSelector(state => state.auth.recuperar);
    const dispatch = useAppDispatch();
    const [ValidaPreguntasApi, AuthApi] = useValidaPreguntasApiMutation();
    const [GetPreguntas] = useGetPreguntasMutation();
    const { isLoading, isError, error: errors }: any = AuthApi;
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const traerPregunta = async (params: any) => {
        try {
            const payload = await GetPreguntas(params).unwrap();

            dispatch(RecuperarClave({ ...formValues, ...payload }));
            form.setFieldsValue({ ...formValues, respuesta: '' });

        } catch (error) {
            console.log('rejected', JSON.stringify(error, null, 4));
        }

    }

    useEffect(() => {
        if (!formValues) navigate(-1);
    }, []);

    useEffect(() => {
        form.setFieldsValue(formValues);
    }, [formValues]);

    useEffect(() => {
        if (isError) traerPregunta(formValues);
    }, [isError]);

    const handleSubmit = async (values: any) => {
        try {
            const payload = await ValidaPreguntasApi({ ...formValues, ...values }).unwrap();

            dispatch(RecuperarClave({ ...formValues, ...payload }));
            navigate('/sesion/recuperar');
        } catch (error: any) {
            console.log('rejected', JSON.stringify(error, null, 4));
        }
    }

    return (
        <Layout className='login-layout'>
            <Badge.Ribbon text={'Pregunta Secreta'} placement={'start'}>
                <Card
                    title={' '}
                    size={'small'}
                    style={{ width: 500, height: 275 }}
                >
                    <Form
                        autoComplete='off'
                        disabled={isLoading}
                        form={form}
                        labelCol={{ span: 6 }}
                        onFinish={handleSubmit}
                        wrapperCol={{ span: 18 }}
                    >
                        <Form.Item name={'numeropregunta'} hidden>
                            <Input />
                        </Form.Item>

                        <Form.Item label={'Pregunta'} name={'pregunta'}>
                            <Input placeholder='Pregunta Secreta' />
                        </Form.Item>

                        <Form.Item label={'Respuesta'} name={'respuesta'}>
                            <Input placeholder='Respuesta a la Pregunta Secreta' />
                        </Form.Item>

                        <Divider />
                        <Space>
                            <Button type={'primary'} htmlType={'submit'} loading={isLoading}>Responder</Button>
                            <Button onClick={() => navigate('/sesion')} >Salir</Button>
                        </Space>
                    </Form>
                    <br />
                    {
                        isError && (<Alert
                            message={errors?.status}
                            description={errors?.error || errors?.data.error}
                            type='error'
                            showIcon
                        />)
                    }
                </Card>
                <br />
            </Badge.Ribbon>
        </Layout>
    )
}
