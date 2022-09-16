import { Navigate, Route, Routes } from 'react-router-dom';
import { ForgotPassPage } from '../auth/ForgotPassPage';
import { LoginPage } from '../auth/LoginPage';
import { UserQuestionsPage } from '../auth/UserQuestionsPage';
import { VerifyIdentityPage } from '../auth/VerifyIdentityPage';
import { SubMainRouter } from './SubMainRouter';

export const MainRouter = () => {
    return (
        <Routes>
            <Route path='sesion/*' element={
                <Public>
                    <Routes>
                        <Route index element={<LoginPage />} />
                        <Route path='verificacion' element={<VerifyIdentityPage />} />
                    </Routes>
                </Public>
            }
            />
            <Route path='sesion/identidad/*' element={
                <Private>
                    <Routes>
                        <Route index element={<UserQuestionsPage />} />
                        <Route path='recuperar' element={<ForgotPassPage />} />
                    </Routes>
                </Private>
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

interface RoutesProps{ children: JSX.Element };

const Public = ({ children }: RoutesProps) => {
    const logged = true;

    return (logged) ? <Navigate to={'/'} /> : children;
}
const Private = ({ children }: RoutesProps) => {
    const logged = true;

    return (logged) ? children : <Navigate to={'/sesion'} />;
}