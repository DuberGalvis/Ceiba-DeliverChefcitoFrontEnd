import {
    CERRAR_SESION_USUARIO,
    SESION_USUARIO,
    INICIO_SESION_USUARIO,
    ERROR_CONSULTA,
    MOSTRAR_AGREGAR,
    MOSTRAR_INICIO,
    MOSTRAR_PANEL,
    USUARIO_CREADO,
    TiposAccionesUsuario,
  } from '../../acciones/usuario/UsuarioTiposAcciones';
  import { EstadoUsuario } from '../../modelo/EstadoUsuario';
  import { Usuario } from 'app/feature/Usuario/models/Usuario';
  
  const initialState: EstadoUsuario = {
    usuarios: Array<Usuario>(),
    loading: false,
    mensajeError: '',
    mensajeConfirmacion: '',
    mostrarAgregar: false,
    mostrarInicio: true,
    mostrarPanel: false,
  };
  
  export default function (
    state = initialState,
    action: TiposAccionesUsuario,
  ): EstadoUsuario {
    switch (action.type) {
      case CERRAR_SESION_USUARIO: {
        const usuario = action.payload;
        return {
          ...state,
          usuarios: [
            ...state.usuarios.filter((u) => u.nombre !== usuario.nombre),
          ],
        };
      }
      case SESION_USUARIO: {
        console.log(action.payload, 'payload');
        const usuario = action.payload;
        console.log(usuario);
        return {
          ...state,
          usuarios: [ ...state.usuarios, usuario],
          loading: false,
        };
      }
      case INICIO_SESION_USUARIO: {
        return {
          ...state,
          loading: action.payload,
        };
      }
      case USUARIO_CREADO: {
        const confirmacion: string = action.payload;
        return {
          ...state,
          mensajeConfirmacion: confirmacion,
        };
      }
      case ERROR_CONSULTA: {
        const error: string = action.payload;
        return {
          ...state,
          mensajeError: error,
        };
      }
      case MOSTRAR_AGREGAR: {
        return {
          ...state,
          mostrarAgregar: action.payload,
          mostrarInicio: false,
          mostrarPanel: false,
        };
      }
      case MOSTRAR_INICIO: {
        return {
          ...state,
          mostrarInicio: action.payload,
          mostrarAgregar: false,
          mostrarPanel: false,
        };
      }
      case MOSTRAR_PANEL: {
        return {
          ...state,
          mostrarPanel: action.payload,
          mostrarAgregar: false,
          mostrarInicio: false,
        };
      }

      default:
        return state;
    }
  }
  