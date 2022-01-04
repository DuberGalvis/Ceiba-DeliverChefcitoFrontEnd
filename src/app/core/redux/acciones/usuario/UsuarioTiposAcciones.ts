import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { PedidoListar } from 'app/feature/Pedido/models/PedidoListar';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Reunion } from 'app/feature/Reunion/models/Reunion';
import { Usuario } from 'app/feature/Usuario/models/Usuario';

export const CERRAR_SESION_USUARIO = 'CERRAR_SESION_USUARIO';
export const INICIO_SESION_USUARIO = 'INICIO_SESION_USUARIO';
export const SESION_USUARIO = 'SESION_USUARIO';
export const LISTAR_PEDIDOS_USUARIO = 'LISTAR_PEDIDOS_USUARIO';
export const USUARIO_CREADO = 'USUARIO_CREADO';
export const ERROR_CONSULTA = 'ERROR_CONSULTA';
export const MOSTRAR_INICIO = 'MOSTRAR_INICIO';
export const MOSTRAR_AGREGAR = 'MOSTRAR_AGREGAR';
export const MOSTRAR_PANEL = 'MOSTRAR_PANEL';
export const CANCELAR_PEDIDO_USUARIO = 'CANCELAR_PEDIDO_USUARIO';
export const AGREGAR_PEDIDO_USUARIO = 'AGREGAR_PEDIDO_USUARIO';
export const LISTAR_PRODUCTOS = 'LISTAR_PRODUCTOS';
export const LISTAR_REUNIONES = 'LISTAR_REUNIONES';
export const MODIFICAR_PEDIDO = 'MODIFICAR_PEDIDO';
export const MOSTRAR_MODIFICAR_PEDIDO = 'INICIO_MODIFICAR_PEDIDO';
export const MOSTRAR_ACTUALIZAR = 'MOSTRAR_ACTUALIZAR';

interface AccionCerrarSesionUsuario {
  type: typeof CERRAR_SESION_USUARIO;
  payload: string;

}

interface AccionInicioSesionUsuario {
  type: typeof INICIO_SESION_USUARIO;
  payload: boolean;
}

interface AccionIniciarSesionUsuario {
  type: typeof SESION_USUARIO;
  payload: Usuario;
}

interface AccionErrorConsultaUsuario {
  type: typeof ERROR_CONSULTA;
  payload: string;
}

interface AccionListarPedidosUsuario {
  type: typeof LISTAR_PEDIDOS_USUARIO;
  payload: PedidoListar[];
  cantidadTotalPedido: number;
}

interface AccionCrearUsuario {
    type: typeof USUARIO_CREADO;
    payload: string;
}

interface AccionCancelarPedidoUsuario {
  type: typeof CANCELAR_PEDIDO_USUARIO
  payload: PedidoListar;
  confirmacion: string;
}

interface AccionAgregarPedidoUsuario {
  type: typeof AGREGAR_PEDIDO_USUARIO
  payload: Pedido;
  //confirmacion: string;
}

interface AccionMostarInicio {
  type: typeof MOSTRAR_INICIO;
  payload: boolean;
}

interface AccionCrearAgregar {
  type: typeof MOSTRAR_AGREGAR;
  payload: boolean;
}

interface AccionCrearPanel {
  type: typeof MOSTRAR_PANEL;
  payload: boolean;
}

interface AccionMostrarActualizar {
  type: typeof MOSTRAR_ACTUALIZAR;
  payload: boolean;
}

interface AccionListarProductos {
  type: typeof LISTAR_PRODUCTOS;
  payload: Producto[];
  cantidadTotalProducto: number;
}

interface AccionListarReuniones {
  type: typeof LISTAR_REUNIONES;
  payload: Reunion[];
  cantidadTotalReuniones: number;
}

interface AccionIrModificarPedido {
  type: typeof MOSTRAR_MODIFICAR_PEDIDO;
  payload: PedidoListar;
  //cantidadTotalReuniones: number;
}

interface AccionModificarPedido {
  type: typeof MODIFICAR_PEDIDO;
  payload: Pedido;
  //cantidadTotalReuniones: number;
}

export type TiposAccionesUsuario =
  | AccionCerrarSesionUsuario
  | AccionIniciarSesionUsuario
  | AccionCrearUsuario
  | AccionMostarInicio
  | AccionCrearAgregar
  | AccionCrearPanel
  | AccionInicioSesionUsuario
  | AccionErrorConsultaUsuario
  | AccionListarPedidosUsuario
  | AccionCancelarPedidoUsuario
  | AccionAgregarPedidoUsuario
  | AccionListarProductos
  | AccionListarReuniones
  | AccionModificarPedido
  | AccionIrModificarPedido
  | AccionMostrarActualizar;
  