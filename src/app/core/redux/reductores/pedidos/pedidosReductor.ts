import {
    AGREGAR_PEDIDO,
    CANCELAR_PEDIDO,
    LISTAR_PEDIDOS_USUARIO,
    LISTAR_PEDIDOS_ACTIVOS,
    TiposAccionesPedido,
} from '../../acciones/pedido/PedidosTiposAcciones';
import { EstadoPedido } from '../../modelo/EstadoPedido';
import { Pedido } from 'app/feature/Pedido/models/Pedido';

const initialState: EstadoPedido = {
    pedidos: Array<Pedido>(),
    cantidadTotalPedido: 0,
}

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
            }
        }
        case CANCELAR_PEDIDO:{
            const pedidoCancel = action.payload;
            return { 
                ...state,
                pedidos: [ ...state.pedidos, pedidoCancel],
            }
        }
        case LISTAR_PEDIDOS_USUARIO: {
            const pedidos = action.payload;
            return {
                ...state,
                pedidos,
                cantidadTotalPedido: action.cantidadTotalPedido,
            }
        }
        case LISTAR_PEDIDOS_ACTIVOS: {
            const pedidosActivos = action.payload;
            return {
                ...state,
                pedidos: pedidosActivos,
                cantidadTotalPedido: action.cantidadTotalPedido,
            }
        }

        default:
            return state;
    }
}
