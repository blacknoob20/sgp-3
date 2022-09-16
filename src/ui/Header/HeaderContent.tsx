import { Breadcrumb, Col, Row, Typography } from 'antd';

export const HeaderContent = () => {
    return (
        <>
            <Row style={localStyles.row}>
                <Col span={24}>
                    <Typography.Title level={3}>Titulo</Typography.Title>
                </Col>
            </Row>
            <Row style={localStyles.row}>
                <Col span={12}>
                    <Typography.Text type='secondary'>Info</Typography.Text>
                </Col>
                <Col
                    span={12}
                    style={localStyles.breadcrumb}
                >
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            Inicia
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Medio
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Final
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
        </>
    )
}

// Estilos
const localStyles = {
    row: {
        padding: '0px 24px',
    },
    breadcrumb: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
}