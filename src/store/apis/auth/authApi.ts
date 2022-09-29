import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export interface ISesionResponseProps {
    foto: string | null;
    token: string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:88/public',
    }),
    endpoints: builder => ({
        IniciarSesion: builder.mutation<ISesionResponseProps, void>({
            query: params => ({
                url: '/login',
                method: 'POST',
                body: params,
            }),
        })
    }),
});

export const { useIniciarSesionMutation } = authApi;