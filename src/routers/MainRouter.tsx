import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ForgotPassPage } from '../auth/ForgotPassPage';
import { LoginPage } from '../auth/LoginPage';
import { UserQuestionsPage } from '../auth/UserQuestionsPage';
import { VerifyIdentityPage } from '../auth/VerifyIdentityPage';
import { useAppSelector } from '../hooks/useReduxToolkit';
import { useAuthStore } from '../auth/hooks/useAuthStore';
import App from '../App';

interface RoutesProps { children: JSX.Element };

export const MainRouter = () => {
    const { RenovarToken, dataRenovarToken } = useAuthStore();

    useEffect(() => {
        RenovarToken();

    }, [dataRenovarToken]);


    return (
        <Routes>
            <Route path='sesion/*' element={
                <>
                    <Public>
                        <Routes>
                            <Route index element={<LoginPage />} />
                            {/* // TODO: Usar el componente Step de AntDesign */}
                            <Route path='verificacion' element={<VerifyIdentityPage />} />
                            <Route path='identidad' element={<UserQuestionsPage />} />
                            <Route path='recuperar' element={<ForgotPassPage />} />
                        </Routes>
                    </Public>
                </>
            }
            />
            <Route path='/*' element={
                <Private>
                    <Routes>
                        <Route index element={<App />} />
                    </Routes>
                </Private>
            } />
        </Routes>
    )
}

const Public = ({ children }: RoutesProps) => {
    const logged = useAppSelector(state => state.auth.login.logeado);

    return (logged) ? <Navigate to={'/'} /> : children;
}
const Private = ({ children }: RoutesProps) => {
    const logged = useAppSelector(state => state.auth.login.logeado);

    return (logged) ? children : <Navigate to={'/sesion'} />;
}