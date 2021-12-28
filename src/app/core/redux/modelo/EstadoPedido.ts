import { Pedido } from 'app/feature/Pedido/models/Pedido';

export interface EstadoPedido {
    pedidos: Pedido[];
    cantidadTotalPedido: number; 
}
