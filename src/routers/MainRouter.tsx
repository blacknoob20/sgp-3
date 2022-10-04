import { Navigate, Route, Routes } from 'react-router-dom';
import { ForgotPassPage } from '../auth/ForgotPassPage';
import { LoginPage } from '../auth/LoginPage';
import { SubMainRouter } from './SubMainRouter';
import { UserQuestionsPage } from '../auth/UserQuestionsPage';
import { VerifyIdentityPage } from '../auth/VerifyIdentityPage';
import { useAppSelector } from '../hooks/useReduxToolkit';

export const MainRouter = () => {
    return (
        <Routes>
            <Route path='sesion/*' element={
                <>
                    <Public>
                        <Routes>
                            <Route index element={<LoginPage />} />
                            <Route path='verificacion' element={<VerifyIdentityPage />} />
                            <Route path='identidad' element={<UserQuestionsPage />} />
                            <Route path='recuperar' element={<ForgotPassPage />} />
                        </Routes>
                    </Public>
                    {/* <Routes>
                        <Route path='identidad/*' element={
                            <Routes>
                                <Route index element={<UserQuestionsPage />} />
                                <Route path='recuperar' element={<ForgotPassPage />} />
                            </Routes>
                        }
                        />
                    </Routes> */}
                </>
            }
            />
            <Route path='/*' element={
                <Private>
                    <Routes>
                        <Route index element={<SubMainRouter />} />
                    </Routes>
                </Private>
            } />
        </Routes>
    )
}

interface RoutesProps { children: JSX.Element };

const Public = ({ children }: RoutesProps) => {
    const logged = useAppSelector(state => state.auth.login.logeado);

    return (logged) ? <Navigate to={'/'} /> : children;
}
const Private = ({ children }: RoutesProps) => {
    const logged = useAppSelector(state => state.auth.login.logeado);

    return (logged) ? children : <Navigate to={'/sesion'} />;
}