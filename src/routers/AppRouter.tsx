import { useEffect, useState } from 'react';
import { Layout, Result } from 'antd';

import { Sidebar } from '../ui/MenuLeft/Sidebar';
import { Topbar } from '../ui/MenuTop/Topbar';
import { HeaderContent } from '../ui/Header/HeaderContent';
import { BodyContent } from '../ui/Body/BodyContent';
import { FooterContent } from '../ui/Footer/FooterContent';
import useWindowDimensions from '../hooks/useWindowDimensions';

export const SubMainRouter = () => {
   const { x: width } = useWindowDimensions();
   const [collapsed, setCollapsed] = useState((width <= 800));

   useEffect(() => {
      setCollapsed((width <= 800));
   }, [width]);

   return (
      <Layout className='container-layout'>
         {/* Menu izquierdo */}
         <Sidebar collapsed={collapsed} />

         {/* Area contenedora */}
         <Layout className='site-layout'>
            {/* Menu superior */}
            <Topbar collapsed={collapsed} handleShowMenu={() => setCollapsed(!collapsed)} />
            {/* Contenido de la cabecera */}
            <HeaderContent />
            {/* Contenido del cuerpo */}
            <BodyContent>
               <Result
                  status={'404'}
                  title='404'
                  subTitle='Sorry, the page you visited does not exist.'
               // extra={<Button type='primary'>Back Home</Button>}
               />
            </BodyContent>
            {/* Contenido del pie */}
            <FooterContent />
         </Layout>
      </Layout >
   )
}
