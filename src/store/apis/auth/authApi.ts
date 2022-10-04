import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export interface SesionResponse {
    foto: string | null;
    token: string;
}

export interface CaptchaResponse {
    captcha: string;
    text: string;
}

export interface ValidaPreguntasResponse {
    numeropregunta: number;
    descripcionvalidacion: string;
}

export interface PreguntasResponse {
    numeropregunta: string;
    pregunta: string;
    error?: string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:88/public',
    }),
    endpoints: builder => ({
        GetCaptcha: builder.query<CaptchaResponse, void>({
            query: () => ({ url: '/captcha' }),
        }),
        IniciarSesionApi: builder.mutation<SesionResponse, void>({
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
    }),
});

export const {
    useGetCaptchaQuery,
    useIniciarSesionApiMutation,
    useGetPreguntasMutation,
    useValidaPreguntasApiMutation,
} = authApi;