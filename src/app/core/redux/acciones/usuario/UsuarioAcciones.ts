import {
    CERRAR_SESION_USUARIO,
    SESION_USUARIO,
    USUARIO_CREADO,
    TiposAccionesUsuario,
  } from './UsuarioTiposAcciones';
  import { Usuario } from 'app/feature/Usuario/models/Usuario';
  import { UsuarioRepositorio } from 'app/core/api/usuario.repositorio';
import { CambioClaveUsuario } from 'app/feature/Usuario/models/CambioClaveUsuario';
  
  export function cerrarSesionUsuario(
    usuario: Usuario,
  ): TiposAccionesUsuario {
    return {
      type: CERRAR_SESION_USUARIO,
      payload: [],
    };
  }
  
  export function agregarSesionUsuario(
    usuario: Usuario,
  ): TiposAccionesUsuario {
    console.log(usuario);
    return {
      type: SESION_USUARIO,
      payload: usuario,
    };
  }

  export function agregarUsuario(
    usuario: Usuario
  ): TiposAccionesUsuario {
    return {
      type: USUARIO_CREADO,
      payload: usuario,
    };
  }

  export function actualizarClave(cambioClaveUsuario: CambioClaveUsuario) {
    return function (dispacth: any) {
      UsuarioRepositorio.actualizar(
        cambioClaveUsuario
      ).then((respuesta: any) =>
        dispacth(
            agregarSesionUsuario(respuesta.data)
        )
      );
    };
  }
    
  export function agregarNuevoUsuario(usuario: Usuario) {
    return function (dispacth: any) {
      UsuarioRepositorio.agregarUsuario(
          usuario
        ).then((respuesta: any) =>
        dispacth(
            agregarUsuario(respuesta.data),
        )
      );
    };
  }

  export function iniciarSesionUsuarioAsync(usuario: Usuario) {
    return function (dispacth: any) {
      UsuarioRepositorio.iniciarSesion(
        usuario
        ).then((respuesta: any) =>
        dispacth(
          console.log('1',respuesta.data),
          agregarSesionUsuario(respuesta.data),
        )
      );
    };
  }

  export function darDeBajaUsuario(usuario: Usuario) {
    return function (dispacth: any) {
      UsuarioRepositorio.darDeBaja(
          usuario
        ).then((respuesta: any) =>
        dispacth(
            cerrarSesionUsuario(respuesta.data),
        )
      );
    };
  }

  export let mostrarinicioSesion: boolean;
  export let mostrarAgregarUsuario: boolean;
  export let mostrarPanelPrincipal: boolean;
  