import { Layout, Typography } from 'antd';

export const FooterContent = () => {
    return (
        <Layout.Footer className='footer-layout'>
            <small>
                <Typography.Title level={5} italic type={'secondary'}>Copyright © 2022 SGP plus.</Typography.Title>
                <Typography.Text type={'secondary'} >Desarrollado por la Dirección de Tecnologías de Información y Comunicación | Todos los derechos reservados.</Typography.Text>
            </small>
        </Layout.Footer>
    )
}
