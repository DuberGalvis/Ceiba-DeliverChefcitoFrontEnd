import { Pedido } from 'app/feature/Pedido/models/Pedido';
export const AGREGAR_PEDIDO = 'AGREGAR_PEDIDO';
export const CANCELAR_PEDIDO = 'CANCELAR_PEDIDO';
export const LISTAR_PEDIDOS_USUARIO = 'LISTAR_PEDIDOS_USUARIO';
export const LISTAR_PEDIDOS_ACTIVOS = 'LISTAR_PEDIDOS_ACTIVOS';

interface AccionAgregarPedido {
    type: typeof AGREGAR_PEDIDO;
    payload: Pedido;
}

interface AccionCancelarPedido {
    type: typeof CANCELAR_PEDIDO;
    payload: Pedido;
}

interface AccionListarPedidosUsuario {
    type: typeof LISTAR_PEDIDOS_USUARIO;
    payload: Pedido[];
    cantidadTotalPedido: number;
}

interface AccionListarPedidosActivos {
    type: typeof LISTAR_PEDIDOS_ACTIVOS;
    payload: Pedido[];
    cantidadTotalPedido: number;
}

export type TiposAccionesPedido =
  | AccionAgregarPedido
  | AccionCancelarPedido
  | AccionListarPedidosUsuario
  | AccionListarPedidosActivos;
