import {
    CERRAR_SESION_USUARIO,
    SESION_USUARIO,
    USUARIO_CREADO,
    INICIO_SESION_USUARIO,
    ERROR_CONSULTA,
    MOSTRAR_AGREGAR,
    MOSTRAR_INICIO,
    MOSTRAR_PANEL,
    LISTAR_PEDIDOS_USUARIO,
    CANCELAR_PEDIDO_USUARIO,
    AGREGAR_PEDIDO_USUARIO,
    LISTAR_PRODUCTOS,
    LISTAR_REUNIONES,
    TiposAccionesUsuario,
  } from './UsuarioTiposAcciones';
  import { Usuario } from 'app/feature/Usuario/models/Usuario';
  import { UsuarioRepositorio } from 'app/core/api/usuario.repositorio';
import { CambioClaveUsuario } from 'app/feature/Usuario/models/CambioClaveUsuario';
import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Reunion } from 'app/feature/Reunion/models/Reunion';
import { PedidoListar } from 'app/feature/Pedido/models/PedidoListar';
  
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

export function listarPedidosUsuario(
  pedidos: Array<PedidoListar>,
  cantidadTotalPedido: number,
): TiposAccionesUsuario {
    return {
        type: LISTAR_PEDIDOS_USUARIO,
        payload: pedidos,
        cantidadTotalPedido
    };
}

export function listarPedidosUsuarioAsync( usuario: Usuario, numeroPagina: number )
{
    return function (dispacth: any) {
        UsuarioRepositorio.consultarPedidosUsuario(usuario.nombre)
        .then((respuesta: any) =>
            dispacth(
                listarPedidosUsuario(respuesta.data, Array.from(respuesta.data).length)
            )
        )
    };
}

export function cancelarPedidoUsuario(
  pedido: PedidoListar,
  confirmacion: string,
): TiposAccionesUsuario {
  return {
      type: CANCELAR_PEDIDO_USUARIO,
      payload: pedido,
      confirmacion,
  };
}

export function agregarPedidoUsuario(
  pedido: Pedido,
  //confirmacion: string,
): TiposAccionesUsuario {
  return {
      type: AGREGAR_PEDIDO_USUARIO,
      payload: pedido,
      //confirmacion,
  };
}

export function agregarPedidoUsuarioAsync(pedido: Pedido)
{
    return function (dispacth: any) {
      UsuarioRepositorio.agregarPedido(pedido)
        .then((respuesta: any) =>
            dispacth(
              agregarPedidoUsuario(respuesta.data)
            )
        )
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

export function cancelarPedidoUsuarioAsync(pedidoListar: PedidoListar)
{
    return function (dispacth: any) {
      UsuarioRepositorio.cancelarPedido(pedidoListar)
        .then((respuesta: any) =>
            dispacth(
              cancelarPedidoUsuario(pedidoListar, respuesta.data.message)
            )
        )
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

export function listarProductos(
  productos: Array<Producto>,
  cantidadTotalProducto: number,
): TiposAccionesUsuario {
  return {
    type: LISTAR_PRODUCTOS,
    payload: productos,
    cantidadTotalProducto,
  };
}

export function listarProductosAsync(numeroPagina: number) {
  return function (dispacth: any) {
    UsuarioRepositorio.consultarProductos()
    .then((respuesta: any) =>
      dispacth(
        listarProductos(respuesta.data, Array.from(respuesta.data).length)
      )
    );
  };
}

export function listarReuniones(
  reuniones: Array<Reunion>,
  cantidadTotalReuniones: number,
): TiposAccionesUsuario {
  return {
    type: LISTAR_REUNIONES,
    payload: reuniones,
    cantidadTotalReuniones,
  };
}

export function listarReunionesAsync(numeroPagina: number) {
  return function (dispacth: any) {
    UsuarioRepositorio.consultarReuniones()
    .then((respuesta: any) =>
      dispacth(
        listarReuniones(respuesta.data, Array.from(respuesta.data).length),
      )
    );
  };
}
