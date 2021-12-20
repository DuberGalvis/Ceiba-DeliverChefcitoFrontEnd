import {
    CERRAR_SESION_USUARIO,
    SESION_USUARIO,
    TiposAccionesUsuario,
  } from '../../acciones/usuario/UsuarioTiposAcciones';
  import { EstadoUsuario } from '../../modelo/EstadoUsuario';
  import { Usuario } from 'app/feature/Usuario/models/Usuario';
  
  const initialState: EstadoUsuario = {
    usuarios: Array<Usuario>(),
  };
  
  export default function (
    state = initialState,
    action: TiposAccionesUsuario,
  ): EstadoUsuario {
    switch (action.type) {
      case CERRAR_SESION_USUARIO: {
        const usuarios = action.payload;
        return {
          ...state,
          usuarios,
        };
      }
      case SESION_USUARIO: {
        const usuario = action.payload;
        console.log(usuario);
        return {
          ...state,
          usuarios: [...state.usuarios, usuario],
        };
      }  
      default:
        return state;
    }
  }
  