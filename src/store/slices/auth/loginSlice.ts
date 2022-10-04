import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ValidaPreguntasResponse } from '../../apis/auth/authApi';

export interface LoginProps {
  clave: string;
  idusuario: string;
  logeado: boolean;
  foto?: string | null;
  token?: string;
}

export interface RecuperarClaveProps extends ValidaPreguntasResponse {
  idusuario: string;
  numdocumento: string;
  idempleado: number;
  captchares: string;
}

const initialState = {
  login: {
    clave: '123456',
    idusuario: 'lupesantes',
    logeado: false,
  } as LoginProps,
  recuperar: {
    idusuario: 'crguerrero',
    numdocumento: '0704942457',
    idempleado: 33936,
    captchares: '',
  } as RecuperarClaveProps,
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    IniciarSesion: (state, action: PayloadAction<LoginProps>) => {
      state.login = { ...action.payload, logeado: true };
    },
    RecuperarClave: (state, action: PayloadAction<RecuperarClaveProps>) => {
      state.recuperar = { ...action.payload }
    }
  },
});

export const {
  IniciarSesion,
  RecuperarClave,
} = authSlice.actions;