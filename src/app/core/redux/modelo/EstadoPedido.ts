import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { PedidoListar } from 'app/feature/Pedido/models/PedidoListar';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Reunion } from 'app/feature/Reunion/models/Reunion';
import { Usuario } from 'app/feature/Usuario/models/Usuario';

export interface EstadoPedido {
    pedidos: Pedido[];
    pedidosListar: PedidoListar[];
    usuario: Usuario;
    producto: Producto;
    reunion: Reunion;
    cantidadTotalPedido: number; 
}
