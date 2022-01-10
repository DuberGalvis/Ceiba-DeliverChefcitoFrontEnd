import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { PedidoListar } from 'app/feature/Pedido/models/PedidoListar';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Reunion } from 'app/feature/Reunion/models/Reunion';

export interface EstadoPedido {
    pedido: Pedido;
    pedidos: Pedido[];
    pedidoListar: PedidoListar;
    pedidosListar: PedidoListar[];
    productos: Producto[];
    reuniones: Reunion[];
    mensajeConfirmacion: string;
    mensajeExcepcion: string;
    mensajeExitoCancelar: string;
    cantidadTotalPedidos: number;
    cantidadTotalProductos: number;
    esFestivo: boolean;
    mostrarModificar: boolean; 
}
