import { FC, useEffect, useState } from 'react';
import { Layout, Result } from 'antd';

import useWindowDimensions from './hooks/useWindowDimensions';
import { BodyContent } from './ui/Body/BodyContent';
import { FooterContent } from './ui/Footer/FooterContent';
import { HeaderContent } from './ui/Header/HeaderContent';
import { Sidebar } from './ui/MenuLeft/Sidebar';
import { Topbar } from './ui/MenuTop/Topbar';

const App: FC = () => {
   const { x: width } = useWindowDimensions();
   const [collapsed, setCollapsed] = useState(false);

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

export default App;
