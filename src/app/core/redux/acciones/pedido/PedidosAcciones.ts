import {
    AGREGAR_PEDIDO,
    CANCELAR_PEDIDO,
    LISTAR_PEDIDOS_USUARIO,
    LISTAR_PEDIDOS_ACTIVOS,
    TiposAccionesPedido,
} from './PedidosTiposAcciones';
import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { PedidoRepositorio } from 'app/core/api/pedidos.repositorio';
import { Usuario } from 'app/feature/Usuario/models/Usuario';
import { PedidoListar } from 'app/feature/Pedido/models/PedidoListar';

export function agregarPedido(
    pedido: Pedido,
): TiposAccionesPedido {
    return {
        type: AGREGAR_PEDIDO,
        payload: pedido,
    };
}

export function cancelarPedido(
    pedidoListar: PedidoListar,
): TiposAccionesPedido {
    return {
        type: CANCELAR_PEDIDO,
        payload: pedidoListar,
    };
}

export function listarPedidosUsuario(
    pedidoListar: Array<PedidoListar>,
    cantidadTotalPedido: number,
): TiposAccionesPedido {
    return {
        type: LISTAR_PEDIDOS_USUARIO,
        payload: pedidoListar,
        cantidadTotalPedido,
    };
}

export function listarPedidosActivos(
    pedidosListar: Array<PedidoListar>,
    cantidadTotalPedido: number,
): TiposAccionesPedido {
    return {
        type: LISTAR_PEDIDOS_ACTIVOS,
        payload: pedidosListar,
        cantidadTotalPedido,
            
    };
}

export function agregarPedidoAsync(pedido: Pedido)
{
    return function (dispacth: any) {
        PedidoRepositorio.agregarPedido(pedido)
        .then((respuesta: any) =>
            dispacth(
                agregarPedido(respuesta.data)
            )
        );
    };
}

export function cancelarPedidoAsync()
{
    return function (dispacth: any) {
        PedidoRepositorio.cancelarPedido()
        .then((respuesta: any) =>
            dispacth(
                listarPedidosActivos(respuesta.data, Array.from(respuesta.data).length)
            )
        );
    };
}

export function listarPedidosUsuarioAsync( usuario: Usuario, numeroPagina: number )
{
    return function (dispacth: any) {
        PedidoRepositorio.consultarPedidosUsuario(usuario.nombre)
        .then((respuesta: any) =>
            dispacth(
                listarPedidosUsuario(respuesta.data, Array.from(respuesta.data).length)
            )
        );
    };
}
