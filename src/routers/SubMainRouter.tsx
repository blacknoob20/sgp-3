import { useState } from 'react';
import { Layout } from 'antd';
import { Sidebar } from '../ui/MenuLeft/Sidebar';
import { Topbar } from '../ui/MenuTop/Topbar';
import { HeaderContent } from '../ui/Header/HeaderContent';
import { BodyContent } from '../ui/Body/BodyContent';
import { FooterContent } from '../ui/Footer/FooterContent';

export const SubMainRouter = () => {
    const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className='container-layout'>
      {/* Menu izquierdo */}
      <Sidebar collapsed={collapsed} />

      {/* Area contenedora */}
      <Layout className='site-layout'>
        {/* Menu superior */}
        <Topbar collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
        {/* Contenido de la cabecera */}
        <HeaderContent />
        {/* Contenido del cuerpo */}
        <BodyContent />
        {/* Contenido del pie */}
        <FooterContent />
      </Layout>
    </Layout >
  )
}
