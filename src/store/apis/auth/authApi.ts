import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { LoginProps } from '../../slices/auth/loginSlice';

export interface SesionResponse {
    foto: string | null;
    token: string;
    status?: string;
    originalStatus?: number;
    data?: string;
    error?: string;
}

export interface CaptchaResponse {
    captcha: string;
    text: string;
}

export interface ValidaPreguntasResponse {
    numeropregunta: string;
    descripcionvalidacion: string;
}

export interface PreguntasResponse {
    numeropregunta: string;
    pregunta: string;
    error?: string;
}

export interface RenovarTokenResponse {
    idusuario: string;
    token: string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:88/public',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');

            headers.set('x-token', `${token}`);

            return headers
        },
    }),
    endpoints: builder => ({
        GetCaptcha: builder.query<CaptchaResponse, void>({
            query: () => ({ url: '/captcha' }),
        }),
        IniciarSesionApi: builder.mutation<SesionResponse, LoginProps>({
            query: params => ({
                url: '/login',
                method: 'POST',
                body: params,
            }),
        }),
        GetPreguntas: builder.mutation<PreguntasResponse, void>({
            query: params => ({
                url: '/verificacion',
                method: 'POST',
                body: params,
            }),
        }),
        ValidaPreguntasApi: builder.mutation<ValidaPreguntasResponse, void>({
            query: params => ({
                url: '/verificacion/preguntas',
                method: 'POST',
                body: params,
            }),
        }),
        RenovarTokenApi: builder.query<RenovarTokenResponse, void>({
            query: () => ({ url: '/renovar' }),
            transformResponse: res => (res || {}) as RenovarTokenResponse,
        }),
    }),
});

export const {
    useGetCaptchaQuery,
    useRenovarTokenApiQuery,
    useIniciarSesionApiMutation,
    useGetPreguntasMutation,
    useValidaPreguntasApiMutation,
} = authApi;