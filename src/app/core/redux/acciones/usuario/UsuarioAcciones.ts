import {
    CERRAR_SESION_USUARIO,
    SESION_USUARIO,
    USUARIO_CREADO,
    INICIO_SESION_USUARIO,
    ERROR_CONSULTA,
    MOSTRAR_AGREGAR,
    MOSTRAR_INICIO,
    MOSTRAR_PANEL,
    TiposAccionesUsuario,
  } from './UsuarioTiposAcciones';
  import { Usuario } from 'app/feature/Usuario/models/Usuario';
  import { UsuarioRepositorio } from 'app/core/api/usuario.repositorio';
import { CambioClaveUsuario } from 'app/feature/Usuario/models/CambioClaveUsuario';
  
  export function cerrarSesionUsuario(
    usuario: Usuario,
    confirmacion: string,
  ): TiposAccionesUsuario {
    return {
      type: CERRAR_SESION_USUARIO,
      payload: usuario,
      confirmacion,
    };
  }

  export function inicioSesionUsuario(
  ): TiposAccionesUsuario {
    return {
      type: INICIO_SESION_USUARIO,
      payload: true,
    };
  }
  
  export function agregarSesionUsuario(
    usuario: Usuario,
  ): TiposAccionesUsuario {
    return {
      type: SESION_USUARIO,
      payload: usuario,
    };
  }

  export function agregarUsuario(
    confirmacion: string
  ): TiposAccionesUsuario {
    return {
      type: USUARIO_CREADO,
      payload: confirmacion,
    };
  }

  export function errorEnConsulta(
    error: string
  ): TiposAccionesUsuario {
    return {
      type: ERROR_CONSULTA,
      payload: error,
    };
  }

  export function actualizarClave(cambioClaveUsuario: CambioClaveUsuario) {
    const usuario: Usuario = {nombre: cambioClaveUsuario.nombre, clave: cambioClaveUsuario.nuevaClave};
    return function (dispacth: any) {
      UsuarioRepositorio.actualizar(
        cambioClaveUsuario
      ).then((respuesta: any) =>
        dispacth(
          cerrarSesionUsuario(usuario, respuesta.data)
        )
      ).catch((error: any) =>
        dispacth(
          errorEnConsulta(error.message),
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
            agregarUsuario(respuesta.statusText),
        )
      )
      .catch((error: any) =>
      dispacth(
        errorEnConsulta(error.message),
        )
      );
    };
  }

  export function iniciarSesionUsuarioAsync(usuario: Usuario) {
    return function (dispacth: any) {
      dispacth(inicioSesionUsuario());
      UsuarioRepositorio.iniciarSesion(
        usuario
        ).then((respuesta: any) =>
          dispacth(
            agregarSesionUsuario(respuesta.data),
          )
        )
        .catch ((error: any) =>
          dispacth(
            errorEnConsulta(error.message),
          )
        );
    };
  }

  export function darDeBajaUsuario(usuario: Usuario) {
    return function (dispacth: any) {
      UsuarioRepositorio.darDeBaja(
          usuario.nombre
        ).then((respuesta: any) =>
        dispacth(
            cerrarSesionUsuario(usuario, respuesta.data),
        )
      );
    };
  }

  export function irAgregarUsuario(
  ):TiposAccionesUsuario {
    return {
      type: MOSTRAR_AGREGAR,
      payload: true,
    };
  }

export function irInicioSesion(
  ):TiposAccionesUsuario {
  return {
    type: MOSTRAR_INICIO,
    payload: true,
  };
}

export function irPanelPrincipal(
  ):TiposAccionesUsuario {
  return {
    type: MOSTRAR_PANEL,
    payload: true,
  };
}

