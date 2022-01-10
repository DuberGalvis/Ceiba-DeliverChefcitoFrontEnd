import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { PedidoListar } from 'app/feature/Pedido/models/PedidoListar';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Reunion } from 'app/feature/Reunion/models/Reunion';
export const LISTAR_PEDIDOS_USUARIO = 'LISTAR_PEDIDOS_USUARIO';
export const AGREGAR_PEDIDO_USUARIO = 'AGREGAR_PEDIDO_USUARIO';
export const CANCELAR_PEDIDO = 'CANCELAR_PEDIDO';
export const MODIFICAR_PEDIDO = 'MODIFICAR_PEDIDO';
export const LISTAR_PRODUCTOS_PEDIDO = 'LISTAR_PRODUCTOS_PEDIDO';
export const LISTAR_REUNIONES_PEDIDO = 'LISTAR_REUNIONES_PEDIDO';
export const LISTAR_PEDIDOS = 'LISTAR_PEDIDOS';
export const MOSTRAR_MODIFICAR = 'MOSTRAR_MODIFICAR';
export const MOSTRAR_PEDIDOS = 'MOSTRAR_PEDIDOS';
export const FECHA_FESTIVO = 'FECHA_FESTIVO';
export const ERROR_CONSULTA = 'ERROR_CONSULTA';

interface AccionListarPedidosUsuario {
    type: typeof LISTAR_PEDIDOS_USUARIO;
    payload: PedidoListar[];
    cantidadTotalPedido: number;
    mensajeSinPedidos: string;
}

interface AccionAgregarPedidoUsuario {
    type: typeof AGREGAR_PEDIDO_USUARIO;
    payload: Pedido;
    mensajeConfirmacion: string;
}

interface AccionCancelarPedido {
    type: typeof CANCELAR_PEDIDO;
    payload: PedidoListar;
    mensajeConfirmacion: string;
}

interface AccionModificarPedido {
    type: typeof MODIFICAR_PEDIDO;
    mensajeConfirmacion: string;
}

interface AccionListarProductos {
    type: typeof LISTAR_PRODUCTOS_PEDIDO;
    payload: Producto[];
    cantidadTotalProductos: number;
}

interface AccionListarReuniones {
    type: typeof LISTAR_REUNIONES_PEDIDO;
    payload: Reunion[];
}

interface AccionListarPedidos {
    type: typeof LISTAR_PEDIDOS;
    numeroPaginas: number;
}

interface AccionMostrarModificar {
    type: typeof MOSTRAR_MODIFICAR;
    payload: PedidoListar;
    mostrarModificar: boolean;
}

interface AccionMostrarPedidos {
    type: typeof MOSTRAR_PEDIDOS;
    mostrarModificar: boolean;
}

interface AccionEsFestivo {
    type: typeof FECHA_FESTIVO;
    payload: boolean;
}

interface AccionErrorConsulta {
    type: typeof ERROR_CONSULTA;
    mensajeError: string;
}

export type TiposAccionesPedido =
  | AccionListarPedidosUsuario
  | AccionAgregarPedidoUsuario
  | AccionCancelarPedido
  | AccionModificarPedido
  | AccionListarProductos
  | AccionListarReuniones
  | AccionListarPedidos
  | AccionMostrarModificar
  | AccionMostrarPedidos
  | AccionEsFestivo
  | AccionErrorConsulta;
