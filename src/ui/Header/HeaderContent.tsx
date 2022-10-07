import { useLocation } from 'react-router-dom';
import { Breadcrumb, Col, Row, Typography } from 'antd';

export const HeaderContent = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/').filter(i => i);

    return (
        <>
            <Row style={localStyles.row}>
                <Col
                    flex={2}
                >
                    <Typography.Title level={3}>Titulo</Typography.Title>
                </Col>
                <Col
                    flex={3}
                    style={localStyles.breadcrumb}
                >
                    <Breadcrumb>
                        {paths.map((value) => <Breadcrumb.Item>{value}</Breadcrumb.Item>)}
                    </Breadcrumb>
                </Col>
            </Row>
            <Row style={localStyles.row}>
                <Col>
                    <Typography.Text type='secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ducimus impedit placeat sunt nesciunt molestias illo delectus asperiores, enim facilis ex ipsam dolore ad doloremque, quia tempora distinctio mollitia temporibus!</Typography.Text>
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