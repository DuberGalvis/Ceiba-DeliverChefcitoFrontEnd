import {
    AGREGAR_PEDIDO,
    CANCELAR_PEDIDO,
    LISTAR_PEDIDOS_USUARIO,
    LISTAR_PEDIDOS_ACTIVOS,
    TiposAccionesPedido,
} from '../../acciones/pedido/PedidosTiposAcciones';
import { EstadoPedido } from '../../modelo/EstadoPedido';
import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { PedidoListar } from 'app/feature/Pedido/models/PedidoListar';

const initialState: EstadoPedido = {
    pedidos: Array<Pedido>(),
    pedidosListar: Array<PedidoListar>(),
    usuario: {nombre: '', clave: ''},
    producto: {nombre: '', detalle: '', precio: 0},
    reunion: {tipo: '', precio: 0},
    cantidadTotalPedido: 0,
};

export default function (
    state = initialState,
    action: TiposAccionesPedido,
): EstadoPedido {
    switch (action.type) {
        case AGREGAR_PEDIDO: {
            const pedido = action.payload;
            return { 
                ...state,
                pedidos: [ ...state.pedidos, pedido],
            };
        }
        case CANCELAR_PEDIDO:{
            const pedidoListar = action.payload;
            return { 
                ...state,
                pedidosListar: [ ...state.pedidosListar, pedidoListar],
            };
        }
        case LISTAR_PEDIDOS_USUARIO: {
            const pedidosListar = action.payload;
            return {
                ...state,
                pedidosListar,
                cantidadTotalPedido: action.cantidadTotalPedido,
            };
        }
        case LISTAR_PEDIDOS_ACTIVOS: {
            const pedidosActivos = action.payload;
            return {
                ...state,
                pedidosListar: pedidosActivos,
                cantidadTotalPedido: action.cantidadTotalPedido,
            };
        }

        default:
            return state;
    }
}
