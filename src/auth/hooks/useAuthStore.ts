import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxToolkit';
import { useIniciarSesionApiMutation, useRenovarTokenApiQuery } from '../../store/apis/auth/authApi';
import { CerrarSesionReducer, IniciarSesionReducer, LoginProps } from '../../store/slices/auth/loginSlice';

export const useAuthStore = () => {
    const navigate = useNavigate();
    const formValues = useAppSelector((state) => state.auth.login);
    const dispatch = useAppDispatch();
    const AuthStoreRenovarToken = useRenovarTokenApiQuery();
    const { data: dataRenovarToken, isError: isErrorRenovarToken, error } = AuthStoreRenovarToken;
    const [IniciarSesionApi, AuthStore] = useIniciarSesionApiMutation();
    const { isLoading, isError, error: errors }: any = AuthStore;

    const IniciarSesion = async ({ idusuario, clave }: LoginProps) => {
        try {
            const payload = await IniciarSesionApi({ idusuario, clave }).unwrap();

            dispatch(IniciarSesionReducer({ ...payload, idusuario, clave, }));
            localStorage.setItem('token', payload.token);
            localStorage.setItem('foto', payload?.foto || '');
            navigate('/');
        } catch (error: any) {
            // dispatch(CerrarSesionReducer());
            // localStorage.clear();
            console.log('rejected', JSON.stringify(error, null, 4));
        }
    }

    const CerrarSesion = () => {
        dispatch(CerrarSesionReducer());
        localStorage.clear();
        navigate('/sesion');
    }

    const RenovarToken = () => {
        const token = localStorage.getItem('token');

        if (!token) return dispatch(CerrarSesionReducer());

        if (!dataRenovarToken) {
            console.log(JSON.stringify(error));
            localStorage.clear();

            return dispatch(CerrarSesionReducer());
        }

        console.log(AuthStoreRenovarToken);
        dispatch(IniciarSesionReducer({
            clave: '',
            idusuario: dataRenovarToken?.idusuario || '',
            foto: localStorage.getItem('token'),
            token: dataRenovarToken?.token,
        }));

    }

    return {
        // propiedades
        dataRenovarToken,
        formValues,
        isLoading,
        isError,
        errors,
        // métodos
        IniciarSesion,
        CerrarSesion,
        RenovarToken,
    }
}