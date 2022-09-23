import { Badge, Button, Card, Divider, Form, Input, Layout, Select, Space, Typography } from 'antd';
const { Content } = Layout;


export const BodyContent = () => {
    return (
        <Content
            className='site-layout-background'
            style={{
                margin: '0px 16px',
                padding: 24,
                minHeight: 280,
                overflow: 'scroll',
            }}
        >
            <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
            >
                <Badge.Ribbon text={'Datos de Persona'} placement={'start'}>
                    <Card title={' '} size={'small'} >
                        <Form.Item label={<Typography.Text strong>Código</Typography.Text>}>
                            <Input placeholder='Código de persona' />
                        </Form.Item>
                        <Form.Item label={<Typography.Text strong>Persona</Typography.Text>}>
                            <Select placeholder='Tipo (1=Natural / 2=Juridica)'>
                                <Select.Option value=''>* Seleccionar *</Select.Option>
                                <Select.Option value='1'>Natural</Select.Option>
                                <Select.Option value='2'>Juridica</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label={<Typography.Text strong>Tipo</Typography.Text>}>
                            <Select placeholder='Código del Tipo de Documento'>
                                <Select.Option value=''>* Seleccionar *</Select.Option>
                                <Select.Option value='CED'>Cedula</Select.Option>
                                <Select.Option value='RUC'>R.U.C</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label={<Typography.Text strong># Documento</Typography.Text>}>
                            <Input />
                        </Form.Item>
                        <Form.Item label={<Typography.Text strong>Nombre Comercial</Typography.Text>}>
                            <Input placeholder='Nombre Comercial (Personas Juridicas)' />
                        </Form.Item>
                    </Card>
                </Badge.Ribbon>
                <br />
                <Badge.Ribbon text='Persona Natural' placement={'start'}>
                    <Card title={' '} size={'small'} >
                        <Form.Item label={<Typography.Text strong>Apellidos</Typography.Text>}>
                            <Space>
                                <Input placeholder='Primer Apellido' />
                                <Input placeholder='Segundo Apellido' />
                            </Space>
                        </Form.Item>
                        <Form.Item label={<Typography.Text strong>Nombres</Typography.Text>}>
                            <Space>
                                <Input placeholder='Primer Nombre' />
                                <Input placeholder='Segundo Nombre' />
                            </Space>
                        </Form.Item>
                        <Form.Item label={<Typography.Text strong>Teléfono</Typography.Text>}>
                            <Input placeholder='Número de teléfono' />
                        </Form.Item>
                        <Form.Item label={<Typography.Text strong>Celular</Typography.Text>}>
                            <Input placeholder='Número de celular' />
                        </Form.Item>
                        <Form.Item label={<Typography.Text strong>E-mail</Typography.Text>}>
                            <Input placeholder='Dirección de correo electrónico' />
                        </Form.Item>
                    </Card>
                </Badge.Ribbon>
                <br />
                <Badge.Ribbon text={'Dirección'} placement={'start'}>
                    <Card title=' ' size={'small'} >
                        <Form.Item label={<Typography.Text strong>Cantón</Typography.Text>}>
                            <Select placeholder='Código del cantón'>
                                <Select.Option value=''>* Seleccionar *</Select.Option>
                                <Select.Option value='282'>24 de Mayo ()</Select.Option>
                                <Select.Option value='132'>Aguarico ()</Select.Option>
                                <Select.Option value='203'>Alausi ()</Select.Option>
                                <Select.Option value='101'>Alfredo Baquerizo Moreno (Jujan)</Select.Option>
                                <Select.Option value='302'>Ambato ()</Select.Option>
                                <Select.Option value='235'>Antonio Ante ()</Select.Option>
                                <Select.Option value='293'>Arajuno ()</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label={<Typography.Text strong>Calle</Typography.Text>}>
                            <Input placeholder='Nombre de la Calle' />
                        </Form.Item>
                        <Form.Item label={<Typography.Text strong># Vivienda</Typography.Text>}>
                            <Input placeholder='Número de Vivienda' />
                        </Form.Item>
                        <Form.Item label={<Typography.Text strong>Calle</Typography.Text>}>
                            <Input placeholder='Nombre de la Calle de intersección' />
                        </Form.Item>
                    </Card>
                </Badge.Ribbon>

                <Divider />

                <div style={{textAlign: 'center'}}>
                    <Space>
                        <Button type={'primary'}>Grabar</Button>
                        <Button>Limpiar</Button>
                        <Button>Volver</Button>
                    </Space>
                </div>
            </Form >

        </Content >
    )
}
