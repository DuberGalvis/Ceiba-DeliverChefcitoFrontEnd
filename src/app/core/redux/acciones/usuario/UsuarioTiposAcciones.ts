import { Usuario } from 'app/feature/Usuario/models/Usuario';

export const CERRAR_SESION_USUARIO = 'CERRAR_SESION_USUARIO';
export const SESION_USUARIO = 'SESION_USUARIO';
export const USUARIO_CREADO = 'USUARIO_CREADO';
export const MOSTRAR_INICIO = '';
export const MOSTRAR_AGREGAR = '';
export const MOSTRAR_PANEL = '';

interface AccionCerrarSesionUsuario {
  type: typeof CERRAR_SESION_USUARIO;
  payload: [];
}

interface AccionIniciarSesionUsuario {
  type: typeof SESION_USUARIO;
  payload: Usuario;
}

interface AccionCrearUsuario {
    type: typeof USUARIO_CREADO;
    payload: Usuario;
}

interface AccionMostarInicio {
  type: typeof MOSTRAR_INICIO;
  payload: Usuario;
}

interface AccionCrearAgregar {
  type: typeof MOSTRAR_AGREGAR;
  payload: Usuario;
}

interface AccionCrearPanel {
  type: typeof MOSTRAR_PANEL;
  payload: Usuario;
}

export type TiposAccionesUsuario =
  | AccionCerrarSesionUsuario
  | AccionIniciarSesionUsuario
  | AccionCrearUsuario
  | AccionMostarInicio
  | AccionCrearAgregar
  | AccionCrearPanel;