import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './routers/MainRouter';

const App: FC = () => {

  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  )
}

export default App;
